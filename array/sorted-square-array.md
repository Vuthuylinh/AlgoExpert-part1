# Sorted quare array

## Prompt:
Write a function that takes in a non-empty array of integers that are sorte in assending order and returns a new array of the same length with the sqaures of the original integers also sorted in ascending order.

## Example:
- Example 1:
   - input : [1,2,3,4,5]
   - output : [1,4,9,16,25]
- Example 2:
   - input =[-2,1,3]
   - output =[1,4,9]

- Example 3:
  - input = [-9,-7,1,2,3,8]
## Solution:
### Brute force:
  - inilialize an array to keep result
  - iterate input array => square each element
  - sort the output array
  ```js
   function sortSquareArray(array){
     let result = array.map(element=> element*element)
     return result.sort((a,b)=> a-b)
   }
  ```
### Optimal Solution
 - initialize an array to keep result
 - use two pointers:
     - leftPointer start from index = 0
     - rightPointer start from index = array.length-1
     - compare square value of element at leftPointer and rightPointer
     - whichever has larger value will be push into the result array
     - move pointer corresponding after each push

 ```js
  function sortedSquareArray(array){
    let result =[]
    let leftPointer = 0
    let rightPointer =array.length-1
    for(let i=array.length-1; i>=0; i--){
      let left = array[leftPointer] * array[leftPointer]
      let right = array[rightPointer] * array[rightPointer]
      if(left>right){
        result[i]=left
        leftPointer++
      }else{
        result[i]=right
        rightPointer--
      }
    }
    return result
  }

 ```
