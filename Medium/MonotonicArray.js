/*
Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
An array is said to be monotonic if its elements from left to right are entirely non incresing or intirely non decresing.
Non-incresing elements aren't neccessarily exclusively decreasing; they simply don't increase. Similarly,non decreasing elements aren't neccessarily exclusively increasing, they simply don decrease.
Note that empty arrays and array of one element are monotonic.

input: array of integers
output: true/false

Approach:
length = array.length
- length ===0 || length ===1 return true
- length >=2
  flags: isNonDecreasing = true
         isNonIncreasing = true
- check 2 flags as the same time while iterate the input array
       if()
*/
