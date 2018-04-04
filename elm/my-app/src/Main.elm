module Main exposing (..)

import Html.Events exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Random
import Http
import Json.Decode as Decode
import Time exposing (Time, second)
import WebSocket


---- MODEL ----


type alias Model =
  { content : String
  , counter: Int
  , reversable: String
  , todo: String
  , submitted: Bool
  , todos: List ToDo
  , current: ToDo
  , die1: Int
  , die2: Int
  , topic: String
  , gifUrl: String
  , time: Time
  , input: String
  , messages: List String
  }



init : ( Model, Cmd Msg )
init =
    ({ content = "hello this is the 'content' of model"
    , counter = 0
    , reversable = ""
    , todo = ""
    , submitted = False
    , todos = [{id = 0, text = "buy milk"}, {id = 1, text = "buy eggs"}]
    , current = {id = 0, text = "buy milk"}
    , die1 = 1
    , die2 = 2
    , topic = "dogs"
    , gifUrl = "waiting.gif"
    , time = 0
    , input = ""
    , messages = []
    }
    , Cmd.none)



---- UPDATE ----


type Msg
    = Increment
    | Decrement
    | Rev String
    | Add String
    | Submit
    | AddToDo
    | Roll
    | NewFace1 Int
    | NewFace2 Int
    | ChangeTopic String
    | More
    | NewGif (Result Http.Error String)
    | Tick Time
    | Input String
    | Send
    | NewMessage String

type alias ToDo =
  {id : Id
  , text: String
  }

type alias Id = Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Increment ->
      ( { model | counter = model.counter + 1 }, Cmd.none )
    Decrement ->
      ( { model | counter = model.counter - 1 }, Cmd.none )
    Rev "paul" ->
      ( { model | reversable = "chris" }, Cmd.none )
    Rev newContent ->
      ( { model | reversable = newContent }, Cmd.none)
    Add newTodo ->
      ( { model | todo = newTodo }, Cmd.none )
    Submit ->
      ( { model | submitted = True }, Cmd.none )
    AddToDo ->
      ( { model | todos = model.todos ++ [{ id = 0, text = model.todo }], todo = "" }, Cmd.none )
    Roll ->
      ( model, Random.generate NewFace1 (Random.int 1 6) )
    NewFace1 newFace1 ->
      ( { model | die1 = newFace1 }, Random.generate NewFace2 (Random.int 1 6) )
    NewFace2 newFace2 ->
      ( { model | die2 = newFace2 }, Cmd.none )
    ChangeTopic newTopic ->
      ( { model | topic = newTopic}, Cmd.none )
    More ->
      ( model, getRandomGif model.topic )
    NewGif (Ok newUrl) ->
      ( { model | gifUrl = newUrl }, Cmd.none )
    NewGif (Err _) ->
      ( model, Cmd.none )
    Tick t ->
      ( { model | time = model.time + 1 }, Cmd.none )
    Input newInput ->
      ( { model | input = newInput }, Cmd.none )
    Send ->
      ( { model | input = "" }, WebSocket.send "ws://echo.websocket.org" model.input )
    NewMessage message ->
      ( { model | messages = (message :: model.messages) }, Cmd.none )


---- VIEW ----


view : Model -> Html Msg
view model =
    container
        [ h1 [] [ text "Your Elm App is working!" ]
        , ul []
          [ li [] [text "list item one"]
          , li [] [text "list itme two"]
          ]
        , p [] [ text model.content]
        , div [ class "counter"]
          [ h2 [] [ text (toString model.counter)]
          , button [ class "count", onClick Increment] [text "+"]
          , button [ class "count", onClick Decrement] [text "-"]
          ]
        , input [ onInput Rev ] []
        , p [] [text (String.reverse model.reversable)]
        , div [ class "todo" ]
          [ input [ placeholder "todo", onInput Add, value model.todo ] []
          , button [ onClick AddToDo ] [ text "submit" ]
          , ul [] (List.map (viewToDo model.current) model.todos)
          ]
        , div [ class "rollDie" ]
          [ h2 [] [ text (toString model.die1) ]
          , h2 [] [ text (toString model.die2 )]
          , button [ onClick Roll ] [ text "Roll" ]
          ]
        , div [ class "gif" ]
        [ h2 [] [ text model.topic ]
        , input [ placeholder "gif category", onInput ChangeTopic ] []
        , input [ type_ "submit", onClick More ] []
        , br [] []
        , img [ src model.gifUrl ] []
        , br [] []
        , button [ onClick More ] [ text "More!" ]
        ]
        , h2 [] [ text "seconds that have elapsed:" ]
        , h2 [] [ text (toString model.time)]
        , div [ class "chat" ]
          [ h2 [] [ text "Let's chat" ]
          , input [ onInput Input, value model.input ] []
          , button [ onClick Send ] [ text "Send" ]
          , div [] (List.map viewMessages model.messages)
          ]
        , checkbox "helper function!"
        ]



container : List (Html msg) -> Html msg
container a = div [ class "container" ] a

checkbox : String -> Html msg
checkbox name =
  label []
  [ input [ type_ "checkbox" ] []
  , text name
  ]

viewMessages : String -> Html msg
viewMessages message =
  p [] [ text message ]

getRandomGif : String -> Cmd Msg
getRandomGif topic =
  let
    url =
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" ++ topic

    request =
      Http.get url decodeGifUrl
  in
    Http.send NewGif request

decodeGifUrl : Decode.Decoder String
decodeGifUrl =
  Decode.at ["data", "image_url"] Decode.string

viewToDo : ToDo -> ToDo -> Html msg
viewToDo current todo =
  if todo == current then
    li [] [ text (todo.text++"!") ]
  else
    li [] [ text todo.text ]

viewAdd : Model -> Html msg
viewAdd model =
    if model.submitted then
      p [] [ text model.todo ]
    else
      text ""

---- SUBSCRIPTION ----

subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch
    [ WebSocket.listen "ws://echo.websocket.org" NewMessage
    , Time.every second Tick
    ]

---- PROGRAM ----



main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
