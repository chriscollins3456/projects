defmodule BackendWeb.Router do
  use BackendWeb, :router

  pipeline :api do
    plug CORSPlug, [origin: "http://localhost:3000"]
    plug :accepts, ["json"]
  end

  scope "/", BackendWeb do
    pipe_through :api

    get "/channels", ChannelController, :index
    post "/channels", ChannelController, :create
    options "/channels", ChannelController, :create
  end
end
