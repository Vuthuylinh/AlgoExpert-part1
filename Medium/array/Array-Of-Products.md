# Array Of Products

## Prompt:
 Write a function that takes in a non-empty array of integers and return the array of same length, where each element in the output array is equal to the product of every other number in the input array. In other words, the value at the output[i] is equal to the product of every number in the input array other than the input[i].
 Note that you are expected to solve this problem without using division.

## Example:
- input : array = [5,1,4,2]
- output: [8,40,10,20]

## Solution:


```js
function arrayOfProducts(array){
  let products = new Array(array.length).fill(1)
  let leftProducts = new Array(array.length).fill(1)
  let rightProducts = new Array(array.length).fill(1)

let leftRunningProduct =1
  for(let i=0; i<array.length; i++ ){
    leftProducts[i] = leftRunningProduct
    leftRunningProduct *=array[i]
  }

let rightRunningProduct =1
for(let i = array.length-1; i>=0; i--){
  rightProducts[i]= rightRunningProduct
  rightRunningProduct *= array[i]
}
for(let i=0; i<array.length; i++){
  products[i] = leftProducts[i]* rightProducts[i]
}
return products
}
```
