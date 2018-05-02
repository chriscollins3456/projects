defmodule Message do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field :text, :string
    belongs_to :user, User
    belongs_to :channel, Channel
  end

  def changeset(model, params \\ :empty) do
    model
      |> cast(params, [:text, :user_id, :channel_id])
  end

end
