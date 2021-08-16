# Promt
Find three largest numbers
Write a function that takes in array of at least three integers and without sorting the input array, return a sorted array of three larges integers in the input array. The function should returns duplicate integers if necessary; for example, it should return [10,10,12] for an input array of [10,5,9,10,12]

# Solution 1
### Summary
- input: array - integers
- output: array - 3 nums -sorted - bigest - numbers, can be duplicated

- Example: [1,5,3,10]
- output: [3,5,10]

### Approach:
- initialize output array []
- loop through the input array
- keep track of largest number
- any loop that find largest number ->
  -> push in output array,
	-> remove it from the input array
- while output array.length<3;
   -> keep reset largest number,
	 -> loop throught in edited input array again.

	 [1,5,3,10]
### Solution
```js
function findThreeLargestNumbers(array) {
  let output =[]
  while(output.length<3){// 1
		let largestNum = Math.max(...array)
		console.log(largestNum);
		output.push(largestNum)
		let index = array.indexOf(largestNum)
		array.splice(index,1)
	}
	return output.sort((a,b)=>(a-b));
}
```

