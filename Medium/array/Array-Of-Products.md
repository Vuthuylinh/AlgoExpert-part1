# Array Of Products

## Prompt:
 Write a function that takes in a non-empty array of integers and return the array of same length, where each element in the output array is equal to the product of every other number in the input array. In other words, the value at the output[i] is equal to the product of every number in the input array other than the input[i].
 Note that you are expected to solve this problem without using division.

## Example:
- input : array = [5,1,4,2]
- output: [8,40,10,20]

## Approach1: Brute force - nested loop Time O(n^2)| Space: O(n)
  - outer loop start from index i= 0 to end
  - inner loop start from index j= 0 to end
  - if i!==j -> calculate product *=array[j]

### Solution:
  ```js
  function arrayProduct(array){
  let result=[]
   for(let i=0; i<array.length; i++){
     let product =1
     for(let j=0; j<array.length; j++){
       if(i!==j){
         product *= array[j]
       }
       result[i]= product
     }
   }
   return result
  }
```

## Approach2:
- initialize arrays to hold products: result, left and right:
    * result products =[]; fill `1` with length of the input array
    * leftProducts = []; fill `1` with length of the input array
    * rightProducts =[]; fill with `1` with length of the input array
- initialize runningLeftProduct =1, runningRightProduct =1
- iterate input array -> calculate leftProduct, rightProduct, then result = left*right
- Example:
     * input = [a, b, c, d]
     * leftP = [1, a, ab, abc]
     * rightP= [bcd, cd, d, 1]
     * result= [bdc,acd,abd,abc]

## Solution Time O(n)| Space O(n)
```js
function arrayOfProducts(array){
  let products = new Array(array.length).fill(1) //[1,1,1,1]
  let leftProducts = new Array(array.length).fill(1)//[1,1,1,1]
  let rightProducts = new Array(array.length).fill(1)//[1,1,1,1]

let leftRunningProduct =1
  for(let i=0; i<array.length; i++ ){ //0 ->1 -> 2 -> 3
    leftProducts[i] = leftRunningProduct// [1] -> [a] -> [ab]-> [abc]
    leftRunningProduct *=array[i] //[a]-> [ab] -> [abc]
  }

let rightRunningProduct =1
for(let i = array.length-1; i>=0; i--){ // 0<- 1<- 2<- 3
  rightProducts[i]= rightRunningProduct // [bcd]<- [cd]<- [d]<-[1]
  rightRunningProduct *= array[i]//  [bcd] <-[dc]<-[d]
}
for(let i=0; i<array.length; i++){
  products[i] = leftProducts[i]* rightProducts[i]
}
return products
}
```
