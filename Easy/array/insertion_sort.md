# Insertion Sort
Write a function that takes in an array and return a sorted version of that array. Use the insertion sort algorithm to sort the array

# Example:
array=[8,5,2,9,5,6,3]
output: [2,3,5,5,6,8,9]

# Solution:
```js
function insertionSort(array) {
const swap = (j,arr)=>{
						if(arr[j]<arr[j-1]){
							let temp= arr[j-1]
							    arr[j-1] =arr[j]
									arr[j] =temp
						}
					}

for(let i=1; i<array.length; i++){
	let j=i
	while(j>0){
		if(array[j]<array[j-1]){
			swap(j,array)
		  }
		j--
	}
}

return array
}

```
