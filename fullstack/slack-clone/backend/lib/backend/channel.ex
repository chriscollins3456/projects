defmodule Channel do
  use Ecto.Schema

  schema "channels" do
    field :name, :string
    many_to_many :users, User, join_through: ChannelUser
    has_many :messages, Message
  end
end
