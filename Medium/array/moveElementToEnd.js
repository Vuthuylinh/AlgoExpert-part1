/*
You are given an array of integers and an integer. Write a funcrtion that moves all the instances of that integer in the array to the end of the array and returns the array.
the function should perform this in place (should mutate the input array) and doesn't need to maintain the order of other integers.

Approach:
input:  [2, 1, 2, 2, 2, 3, 4, 2] toMove: 2
         ^                    ^
      i=0                    last= array.length-1

-initilize current index  i = 0
- initilize last =array.length-1
  while i< last
  while array[last]===toMove => last --
  if array[i] ===toMove   => swap array[i] vs array[last]
   i++

*/
//solution1: while loops: Time O(n)| space O(1)
function moveToEnd(array,toMove){
  let currentIndx =0
  let lastIndx = array.length-1
  while(currentIndx<lastIndx){
    while(array[lastIndx]===toMove && currentIndx<lastIndx){
      lastIndx--
    }
    if(array[currentIndx] ===toMove){
      let temp =array[currentIndx]
        array[currentIndx]=array[lastIndx]
        array[lastIndx] = temp
        lastIndx--
    }
    currentIndx++
  }
  return array
}


//Solution2
/*
- initialize last = array.length-1
- loop input array from i= end, compare element value vs toMove
if array[last] ===toMove -> last --
   array[last] ===toMove and last !== i  => swap and last --

*/
function swap(a,b,array){
	let temp = array[a]
			array[a]=array[b]
			array[b]=temp
}
function moveToEnd2(array,toMove){
  let lastIndx = array.length-1
  for(let i = lastIndx; i>=0; i--){
    if(array[i]=== toMove){
      if(i!==lastIndx){
        swap(i,lastIndx,array)
      }
      lastIndx--
    }
  }
  return array
}
