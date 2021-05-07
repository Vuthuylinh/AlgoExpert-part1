# Longest peak
## Prompt:
Write a function that take in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach the tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.
For example, the integers `1,4,10,2` form a peak, but the integers `4,0,10` don't neithr `1,2,2,0`. Similiarly, the integers `1,2,3` don't form a peak because there aren't any strictly decreasing integers after the `3`.

## Sample
- input: `array =[1,2,3,3,4,0,10,6,5,-1,-3,2,3]`
- output: 6 because `0,10,6,5,-1,-3` form a longest peak
- question: input array need to has at least 3 elements?
## Approach
- initialize `longestPeak`=0
- iterate the input array from left to right (index i =1 to array.length) with `while loop`.
- find potential tip of the peak (current element = array[i]), check isPeak at the current element:
  - let `isPeak`= `array[i-1]<array[i] && array[i+1]< array[i]` => true/flase
  - if `!isPeak` , `continute` the loop, i++
  - if `isPeak`
      - current element(array[i]) is a tip
      - initialize `leftPointer` of the peak - `leftIndx= i-2`;
      -  use while loop to extend `leftIndx` to the left (`leftIndx--`) while `leftIndx >= 0` && `array[leftIndx] < array[leftIndx+1]`
      - initialize `rightPointer` of the peak - `rightIndx = i+2`
      - use while loop to extend `rightIndx` to the right (`rightIndx++`) while `rightIndx < array[length` && `array[rightIndx]< array[rightIndx-1]`
      - initialize the `currentPeakLength = rightIndx-leftIndx-1`
      - longestPeak = Math.max(currentPeakLength, longestPeak)
      - assign current element position `i = rightIndx`

## Solution - Time O(n)| Space: O(1)

```js

function findLongestPeak(array){
  let longestPeak =0
  let i =1
  while(i < array.length-1){
    let isPeak = array[i]>array[i-1] && array[i]> array[i+1]
    if(!isPeak){
      i++
    }else{
      let leftIndx = i-2
      while(leftIndx >=0 && array[leftIndx]< array[leftIndx+1]){
        leftIndx--
      }

      let rightIndx = i+2
      while(rightIndx <array.length && array[rightIndx]< array[rightIndx-1]){
        rightIndx++
      }
      let currentPeak = rightIndx-leftIndx-1
      longestPeak = Math.max(longestPeak, currentPeak)
      i = rightIndx

    }
  }
  return longestPeak
}


```
