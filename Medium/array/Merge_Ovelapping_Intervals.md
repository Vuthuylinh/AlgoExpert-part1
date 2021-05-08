# Merge Overlapping Intervals
## Prompt
Write a function that takes in a non-empty array of artbitrary intervals, merges any overlapping intervals and returns the new intervals in no particular order.
Each interval interval is an array of two integers with interval[0] as the start of the interval and interval[1] as the end of the interval.
Node that back to back intervals aren't considered to be overlapping. For example, [1,5] and [6,7] aren't overlapping; however, [1,6] and [6,7] are indeed overlapping.
Also note that the start of any particular interval will always be less than or equal to the end of that interval.

## Example:
intervals =[[1,2],[3,5],[4,7],[6,8],[9,10]]
output: [[1,2],[3,8],[9,10]]

## Approach
  - Sort the input intevals by compare the starting point of each interval
  - Initialize an empty array to keep the result: mergeIntervals =[]
  - Initialize currentInterval = sorted input [0]
  - Push first current interval into the result
  - Iterate the sorted intervals ; compare the endPoint of current interval with startPoint of the next interval
      - If current-End >= next start => current End = Math(current End, next-end)
      - If current-End < next start => new current interval = next interval => push in the result array

## Solution
```js
function mergeOverLappingInterval(array){
  array.sort((a,b)=>a[0]-b[0])
  let mergeIntervals =[]
  let currentInterval = array[0]
  mergeInterval.push(currentInterval)
  for(let i=1;i<array.length; i++){
    let nextInterval=array[i]
    let [_, currentEnd] = currentInterval
    let [nextStart,nextEnd]= nextInterval
    if(currentEnd>=nextStart){
      currentInterval[1]=Math.max(currentEnd, nextEnd)
    }else{
      currentInterval = nextInterval
      mergeIntervals.push(currentIntervals)
    }
  }
  return mergeIntervals
}

```
## Another solution - same approach, different way of for loop

```js
function mergeOverlappingInterval(array){
  array.sort((a,b)=>a[0]-b[0])
  let mergeIntervals =[]
  let currentInterval = array[0]
  mergeIntervals.push(currentInterval)
  for(let nextInterval of array){
    let [_, currentEnd]= currentInterval
    let [nextStart, nextEnd] = nextInterval
    if(currentEnd<nextStart){
      currentInterval = nextInterval
      mergeIntervals.push(currentInterval)
    }else{
      currentInterval[1]= Math.max(currentEnd,nextEnd)
    }
  }
  return mergeIntervals
}
```
