# Monotonic Array

## Prompt
- Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
- An array is said to be monotonic if its elements from left to right are entirely non incresing or intirely non decresing.
- Non-incresing elements aren't neccessarily exclusively decreasing; they simply don't increase. Similarly,non decreasing elements aren't neccessarily exclusively increasing, they simply don decrease.
- Note that empty arrays and array of one element are monotonic.
## Approach:

- input: array of integers
- output: true/false

- let `length = array.length`
- length ===0 || length ===1 return true
- length >=2
  flags: isNonDecreasing = true
         isNonIncreasing = true
- check 2 flags as the same time while iterate the input array from index i = 1 to end, compare current element and the value of the element in front of it.
    - if `array[i] > array[i-1]` //incresing ->
          - isNonInCreasing =false,
          - stop keep track of isNonIncreasing
          - only keep track of isNonDecreasing
    - if `array[i]<array[i-1]`//decreasing
          - isNonDecreasing =false,
          - stop keep track of isNonDecreasing
          - only keep track of isNonIncreasing
    - if the both the flags turn false => return false
- return will be isNonDecreasing || isNonIncreasing

### Solution
```js
function isMonotonic(array){
 if(array.length<2) return true
  let isNonIncreasing = true
  let isNonDecreasing = true
  for(let i=1; i<array.length; i++){
    if(array[i]>array[i-1]) isNonDecreasing = false
    if (array[i]< array[i-1]) isNonIncreasing = false
    }
  return isNonDecreasing || isNonIncreasing

}
```
