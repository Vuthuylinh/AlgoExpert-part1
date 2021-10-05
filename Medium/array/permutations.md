# Permutations

Write a function that takes in an array of unique integers and returns an array of all permutations of thoese integers in no particular order.
If the input array is empty, the function should return an empty array

# Summary

- input: an array of integers
- output: multi-dimension array or empty array

# Questions:

- does input array contain negative nums? - could be
- is input array sorted? - no
- can input be empty? -> yes, can be -> result = empty array
- how big is input array?
- what if input array has only 1 element?

# Example:

### Example 1

- input: [1,2]
- output: [[1,2],[2,1]]

### Example 2

- input [1,2,3]
- output [[1,2,3], [1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
- explanation:
  - iterate input array, each step will fix current element and switch postion of the rest
  - index 0: fix `1`, the rest =[2,3] => permutations: [2,3] and [3,2] => [1,2,3], [1,3,2]
  - index 1: fix `2`, the rest =[1,3] => permutations: [1,3] and [3,1] => [2,1,3], [2,3,1]
  - index 3: fix `3`, the rest =[2,1] => permutations: [1,2] and [2,1] => [3,1,2], [3,2,1]
  - restult:[[1,2,3], [1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

# Approach:

- make a permutationHelper function
- this function including:

* iterate the input array
* each step seeing current element(num),
  -> find all permutations with that num stands on the last place(index 0) in the each permutation.
  -> to find all permutations, we need to saparate that number with the rest of input array
  -> recursively call permutationHelper function on the rest of the input array
  -> when reach the base case => we can get a currentPermutation
* base case: if array.length>=1; currentPermutation.length>0
  => permutation.push(currentPermutation)

### Example:

- imput: [1,2,3]
- at index 0; i=0 => currentNum=1
- leftRest= array.slice(0,0) =[]
- rigtRest= array.slice(0+1) = array.slice(1)=[2,3]
- theRestArr = [].concat([2,3]) =[2,3]

# Solution
```js
  function getPermutations(array) {
let permutations=[]
permutationHelper(array,[],permutations)
return permutations
}
const permutationHelper=(array, currentPermutation, permutations)=>{
	if( !array.length && currentPermutation.length){
		permutations.push(currentPermutation)
	}else{
		for(let i=0; i<array.length; i++){
		let currentNum=array[i];
		let leftRest= array.slice(0,i) 
		let rigtRest=array.slice(i+1)
		let currentRestArr= leftRest.concat(rigtRest)
		let newPermutation= currentPermutation.concat(currentNum)
		permutationHelper(currentRestArr,newPermutation, permutations)
	}
	}

}

```
