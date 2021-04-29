#  Smallest Difference
## Prompt
Write a function that takes in two non-empty arrays of integers, finds the pairs of numbers (one from each array) whose absolute different is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

Note that the absolute different of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1
You can assum that there will be only one pair of numbers with the smallest difference.

input: 2 arrays of itegers
output: an array of 2 nums have smallest absolute difference
----------------------------------------------------

## Solution:

### Solution1: Brute force Time: O(n^2)
 #### Approach:

- initialize `output = [0,0]`
- initialize `minDifference = arr1[0]-arr2[0]`
- use nested loops:
    - outer array iterates the arr1 from index `i = 0` to end
    - inner array iterates the arr2 from index `j = 0` to end
    `absDifference  = Math.abs(arr1[i]-arr2[j])`
    `absDifference < min => min = absDifference`
        `output[0]=arr1[i]`
        `output[1]=arr2[j]`
```js
function smallestDifference(arrayOne, arrayTwo) {
  let minGap = Infinity
  let output =[]
  for(let i=0; i<arrayOne.length; i++){
    for(let j =0; j<arrayTwo.length; j++){
      let difference =Math.abs (arrayOne[i]- arrayTwo[j])
      if(minGap> difference){
        minGap =difference
         output=[arrayOne[i], arrayTwo[j]]
      }
    }
  }
   return output
 }

```
### Solution2:
#### Appoach
 - sort 2 arrays
 - initialize minGap = Infinity
 - initialze ouput =[]
 - initialize indexOne = 0
              indexTwo = 0
```js
 while indexOne < arrayOne.length && indexTwo < arrayTwo.length
 let currentDifference = Infinity
 let num1 = arrayOne[indexOne]
 let num2 = arrayTwo[indexTwo]
     if(num1>num2){
     currentDifference = num1-num2
     indexTwo++
     }
     if(num2>num1){
     currentDifference = num2-num1
     indexOne++
     }
     if(num1===num2){
     return [num1,num2]
     }

     if(currentDifference<minGap){
     minGap =currentDifference
     ouput =[num1,num2]
     }

```


```js
 function smallestDifference2(arrayOne, arrayTwo) {
   arrayOne.sort((a,b)=> a-b)
   arrayTwo.sort((a,b)=> a-b)
 let minGap = Infinity
 let ouput =[]
 let indexOne = 0
 let indexTwo = 0
 while(indexOne< arrayOne.length && indexTwo<arrayTwo.length){
   let currentDiff = Infinity
   let num1 = arrayOne[indexOne]
   let num2 = arrayTwo[indexTwo]
   if(num1<num2){
     currentDiff = num2-num1
     indexOne++
   } else if(num2<num1){
     currentDiff = num1-num2
     indexTwo++
   }else{
     return [num1,num2]
   }

   if(currentDiff<minGap){
     minGap = currentDiff
     ouput = [num1,num2]
   }

 }
   return ouput
 }
```
