doubleMe x = x + x

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNumber x = if x > 100
  then x
  else x*2

returnString = "string"

-- list comprehension

length' x = sum [1 | _ <- x]

removeNonUpper xs = [l | l<-xs, l `elem` ['A'..'Z']]

-- pattern matching

sayMe :: (Integral a) => a -> String
sayMe 1 = "One!"
sayMe 2 = "Two!"
sayMe 3 = "Three!"
sayMe 4 = "Four!"
sayMe 5 = "Five!"
sayMe x = "Not between 1 and 5"


tell :: (Show a) => [a] -> String
tell [] = "This list is empty"
tell (x:[]) = "This list has one element: " ++ show x
tell (x:y:[]) = "This list has two elements: " ++ show x ++ " " ++ show y
tell (x:y:_) = "This list has two or more elements, first two are: " ++ show x ++ " " ++ show y

sum' :: (Num a) => [a] -> a
sum' [] = 0
sum' (x:xs) = x + sum' xs

-- guards

bmiTell :: (RealFloat a) => a -> String
bmiTell bmi
  | bmi <= 18.5 = "You're lean"
  | bmi <= 25 = "You're normal"
  | otherwise = "You're huge"
