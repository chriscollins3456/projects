defmodule BackendWeb.ChannelController do
  use BackendWeb, :controller
  def index(conn, params) do
    json(conn, [%{
      id: "0",
      name: "general",
      subscribers: "7",
      messages:
        [%{id: "1",
        user:
          %{id: "0",
          username: "chris"},
        text: "this is a slack clone message",
        channel_id: "0"},
        %{id: "2",
        user:
          %{id: "1",
          username: "paul"},
        text: "our second message, sent from the future",
        channel_id: "0"}
        ]},
    %{
      id: "1",
      name: "music",
      subscribers: "4",
      messages:
        [%{id: "1",
        user:
          %{id: "0",
          username: "chris"},
        text: "music stuff here",
        channel_id: "0"},
        %{id: "2",
        user:
          %{id: "1",
          username: "paul"},
        text: "another music thing",
        channel_id: "0"}
        ]},
    %{
      id: "2",
      name: "nyc",
      subscribers: "3",
      messages:
        [%{id: "1",
        user:
          %{id: "0",
          username: "chris"},
        text: "nyc things in this channel",
        channel_id: "0"},
        %{id: "2",
        user:
          %{id: "1",
          username: "paul"},
        text: "only talkin about nyc",
        channel_id: "0"}
        ]},
    %{
      id: "3",
      name: "random",
      subscribers: "4",
      messages:
        [%{id: "1",
        user:
          %{id: "0",
          username: "chris"},
        text: "here is a random message",
        channel_id: "0"},
        %{id: "2",
        user:
          %{id: "1",
          username: "paul"},
        text: "one more random one for you",
        channel_id: "0"}
        ]},
    %{
      id: "4",
      name: "kudos",
      subscribers: "2",
      messages:
        [%{id: "1",
        user:
          %{id: "0",
          username: "chris"},
        text: "kudos to Paul for teaching me things",
        channel_id: "0"},
        %{id: "2",
        user:
          %{id: "1",
          username: "paul"},
        text: "kudos to me for teaching chris things",
        channel_id: "0"}
        ]}])
  end
end
