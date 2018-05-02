defmodule Backend.Repo.Migrations.CreateChannelsUsers do
  use Ecto.Migration

  def change do
    create table(:channels_users) do
      add :channel_id, references(:channels)
      add :user_id, references(:users)
    end
  end
end
