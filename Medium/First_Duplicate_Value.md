# First duplicate Value

## Prompt
Given an array of integers between `1` and `n`, inclusive where `n` is the length of the array. Write a function that return the first integer that appears more than once (when the array is read from left to right)
In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.
If there no integer appears more than once, your functipn should return `-1`

Note that you are allowed to mutate the input array.

## Example
- input: `[3,1,5,2,3,2,4]`
- output: `3`
   because the second `3` in the index `4`
     while the second `2` in the index `5`

## Approach and Solution

### Approach 1 - Brute force
#### Approach:
 - Initialize `minIndex = Infinity` or `array.length`
 - Use nested loop to iterate the input array
    - outer loop iterates from index `i=0` to `end -1` (`current` element)
    - inner loop iterates from index `j = i+1`  to `end` (`next` element)
    - if current = next then compare `j` with `minIndex`
 - After finish looping, check `minIndex !==Infinity` ? -> return `array[minIndex]`: `-1`

#### Solution code - Time O(n^2)|| Space O(1)

```js
function firstDuplicateValue(array){
let minIndex = array.length
 for(let i=0; i<array.length-1; i++){
   let current = array[i]
   for(let j=i+1; j<array.length; j++){
     let elementToCompare  = array[j]
     if(current = elementToCompare){
       minIndex = Math.min(minIndex,j);
     }
   }
 }
  let result = minIndex!== array.length? array[minIndex]: -1
  return result
}
```
