defmodule BackendWeb.ChannelController do
  import Ecto.Query
  use BackendWeb, :controller


  defp serialize_channel(channel) do
    %{
      id: channel.id,
      name: channel.name,
      messages: Enum.map(channel.messages, &serialize_message/1),
      users: Enum.map(channel.users, &serialize_user/1)
    }
  end

  defp serialize_message(message) do
    %{
      id: message.id,
      text: message.text,
      user: serialize_user(message.user)
    }
  end

  defp serialize_user(user) do
    %{
      id: user.id,
      username: user.username
    }
  end

  def index(conn, params) do
    channels = Backend.Repo.all(from Channel, preload: [[messages: :user], :users])
    json(conn, Enum.map(channels, &serialize_channel/1))
  end

  def create(conn, params) do
    changeset = Message.changeset(%Message{}, params)

    Backend.Repo.insert(changeset)
    json(conn, nil)
  end
end

# data = Backend.Repo.all(from c in Channel, preload: [:messages, :users])
# |> Enum.map(fn data -> Map.take(data, [:id, :messages, :name, :users]) end)
# |> Enum.map(fn data -> Enum.map(data.messages, fn data -> Map.take(data, [:channel_id, :id, :text, :user_id]) end) end)


# |> Enum.map(fn data -> Map.from_struct(data) end)
# |> Enum.map(fn data -> Enum.map(data.messages, fn data -> Map.from_struct(data) end) end)

# Enum.map(channels, fn x -> x.messages end)
# messages = Enum.map(channels, fn x -> )
# new_data = Enum.map(data, fn x -> Map.from_struct(x) end)
