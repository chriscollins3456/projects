defmodule Math do
  def sum(a, b) do
    a + b
  end
end

IO.puts "Hello world from Elixir"

x = Math.sum(2,5)
IO.puts x
