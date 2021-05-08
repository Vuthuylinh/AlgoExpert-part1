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
let minSecondIndex = array.length
 for(let i=0; i<array.length-1; i++){
   let current = array[i]
   for(let j=i+1; j<array.length; j++){
     let elementToCompare  = array[j]
     if(current = elementToCompare){
      minSecondIndex = Math.min(minSecondIndex,j);
     }
   }
 }
  let result =minSecondIndex!== array.length? array[minSecondIndex]: -1
  return result
}
```
----
### Approach and Solution 2 - Time O(n) || Space O(n)
#### Approach
 - Use a set to keep all the unique value while iterate the input array
 - If set has the current element -> return the current element

#### Solution

```js
  function findFirstDuplicateValue(array){
    let set = new Set()
    for(let i =0; i<array.length; i++){
      let current = array[i]
      if(!set.has(current)){
        set.add(current)
      }else{
        return curren
      }
    }
    return -1
  }
```
---
### Approach and Solution 3 - Time O(n)|| Space O(1)

#### Approach


#### Solution


- value : 1-n
  index : 0 to n-1
 ```js
 function findFirstDuplicateValue(array){
   //iterate the input array
   for(let value of array){ // 2
    // calculate absolute value of the element
     const absValue = Math.abs(value)//2
    // if they alreadly seen
     if(array[absValue-1]<0) return absValue
     array[absValue-1] *=-1 // 1-> -1
   }
   return -1
 }
 ```

`[2,1,5,2,3,3,4] -> [2,-1,5,2,3,3,4] ->[-2,-1,5,2,3,3,4] -> [-2,-1,5,2,-3,3,4] -> [-2,-1,5,2,-3,3,4]`

```js
i=0 -> value = 2 -> absValue =2 -> array[2-1] =array[1]=1 >0 -> array[1] = 1*(-1) = -1 keep going
i=1 -> value =-1 -> absValue =1 -> array[1-1] =array[0]= 2>0 -> array[0] = 2*(-1) = -2 keep going
i=2 -> value = 5 -> absValue =5 -> array[5-1] =array[4]= 3>0 -> array[4] = 3*(-1) = -3 keep going
i=3 -> value = 2 -> absValue =2 -> array[2-1] =array[1]= -1<0 -> return value = 2

```
