defmodule ChannelUser do
  use Ecto.Schema

  schema "channels_users" do
    belongs_to :user, User
    belongs_to :channel, Channel
  end
end
