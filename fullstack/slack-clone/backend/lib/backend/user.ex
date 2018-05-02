defmodule User do
  use Ecto.Schema

  schema "users" do
    field :username, :string
    many_to_many :channels, Channel, join_through: ChannelUser
  end
end
