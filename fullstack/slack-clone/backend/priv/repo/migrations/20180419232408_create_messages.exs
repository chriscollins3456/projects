defmodule Backend.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :text, :text
      add :channel_id, references(:channels)
      add :user_id, references(:users)
    end
  end
end
