# Move Element to End
## Prompt
You are given an array of integers and an integer.
Write a function that moves all the instances of that integer in the array to the end of the array and returns the array.
Note:
 - Not mutate the input array -function performs in place
 - No need to maintain the order of the other integers.

## Approach:

- initialize and keep track of lastIndex
- iterate the input array, compare element value with target
  - while array[lastIndex] === target -> lastIndex --
  - if the current element === target => swap index with lastIndex --> lastIndex move forward 1 step (lastIndex--)
