# Selection sort

Write a function that takes in an array of intergers and returns a sorted version of that array. Use the Selection sort algorithm to sort the array.

# Example:
input array = [8,5,2,9,5,6,3]
output: =[2,3,5,5,6,8,9]

# Solution
```js
const swap =(startIndx, indexOfSmallest, arr)=>{
	let temp = arr[startIndx]
	  arr[startIndx] = arr[indexOfSmallest]
	  arr[indexOfSmallest] = temp
}
function selectionSort(array) {

	let startIdx =0
	let lastSortedIndex
	while(startIdx <array.length-1){
			let indexOfSmallest = startIdx
			for(let i = startIdx+1; i<array.length; i++){
				if(array[indexOfSmallest]>array[i]){
					indexOfSmallest = i
				}
			}
		  swap(startIdx, indexOfSmallest, array)
		   startIdx++
	}

	return array
}

```
