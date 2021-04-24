/*
Three numbers sum
Write a fucntion that takes in a non-empty array of distinct integers and an integer representing a target sum. the function should find all the triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets. The numbers in each triplet should be in ascensing order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.
If no three numbers sumup to the target sum, the function should return an empty array.

Example: array =[12,3,1,2,-6,5,-8,6]
target sum = 0
ouput:[[-8,2,6] ,[-8,3,5], [-6,1,5]]

------------------------------------

- input: array -integers
        integer -target sum
- output:
          2 dimensional array if there are sets of three  numbers sum up to target sum
          empty array - if no result
-------------------------------------
Approach:

- sort input array
- initialize an array to keep result:  ouput =[]
- use nested loops:
    +/ outer loop - iterate the input array: run from index 0 to end
        current element = input[i]
    +/ inner loop - iterate the rest element of the array with 2 pointers
      leftIndx = i+1
      rightIndx = input.length -1
      while left<right
       sum = current element + input[left] +input[right]
       if sum === targetSum -> result. push(currentElement, input[left], input[right])
                            -> left++ ; right -- (to find other sets if possible)
       if sum < targetSum => left++
       if sum >targetSum => right--
    finish outer loop return result

*/

function threeSum(input,target){
  let result =[]
  for(let i=0; i<input.length; i++){
    let currentElement = input[i]
    let left = i+1
    let right = input.length-1
    while(left<right){
      let sum = currentElement+ input[left]+ input[right]
      if(sum === target){
        result.push(currentElement, input[left], input[right])
        left++
        right--
      }else if(sum<target){
        left++
      }else{
        right --
      }
    }
  }
  return result
}


