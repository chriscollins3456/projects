##### anonymous functions #####

add_one = fn x -> x + 1 end
IO.puts add_one.(4)

#these two are the same

add_two = &(&1 + 2)
IO.puts add_two.(4)

###### defmodule -> classes/modules #####

defmodule Print do
  def print(string) do
    IO.puts string
  end
end

Print.print("this works")

###### recursion ######

defmodule Recursion do
  def print_multiple_times(msg, n) when n <= 1 do
    IO.puts msg
  end

  def print_multiple_times(msg, n) do
    IO.puts msg
    print_multiple_times(msg, n - 1)
  end
end

Recursion.print_multiple_times("hello", 4)

defmodule Fib do
  def fib(n) when n == 1 or n == 0 do
    n
  end

  def fib(n) do
    fib(n-1) + fib(n-2)
  end
end

IO.puts Fib.fib(7)

##### enumerables #####

list = [1,2,3]
Enum.map(list, fn x -> x+1 end)

#pipe operator
IO.puts Enum.map([1,2,3], fn x -> x*2 end) |> Enum.sum() |> add_two.()

##### processes #####

spawn fn -> 1 + 2 end

send self(), {:hello, "world"}

receive do
   {:hello, msg}  -> IO.puts msg
 after
   1_000 -> IO.puts "nothing after 1s"
 end

##### structs #####

defmodule User do
  defstruct name: "John", age: 27
end
