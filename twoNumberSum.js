/*
TWO NUMBER SUM
Write a function that takes in a non empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sumup to the target sum, the function should return them in an array, in any order.
If no two numbers sumip to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum

Sample:
- input: array =[3,5,-4,8,11,1,-1,6] ; targetSum =10;
- output: [-1, 11]
*/

//Solution 1: Use nested loop

const twoNumberSum1 = (array, targetSum) => {
	for (let i = 0; i < array.length - 1; i++) {
		let firstNum = array[i]
		for (let j = i + 1; j < array.length; j++) {
			let secondNum = array[j]
			if (firstNum + secondNum === targetSum) {
				return [firstNum, secondNum]
			}
		}
	}
	return []
}


//Solution 2: Sort array; Using While loop and 2 pointers -left & right

const twoNumberSum2 = (array, targetSum) => {
	array.sort((a, b) => a - b)
	let left = 0
	let right = array.length - 1
	while (left < right) {
		const currentSum = array[left] + array[right];
		if (currentSum === targetSum) {
			return [array[left], array[right]]
		}else if(currentSum<targetSum){
			left++
		}else if(currentSum> targetSum){
			right--
		}
	}
	return []
}
