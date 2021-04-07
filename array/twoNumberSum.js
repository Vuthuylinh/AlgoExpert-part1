/*
TWO NUMBER SUM
Write a function that takes in a non empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sumup to the target sum, the function should return them in an array, in any order.
If no TWO NUMBERS that sumup to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum

Example:
- input: array =[3,5,-4,8,11,1,-1,6] ; targetSum =10;
- output: [-1, 11]

notes:
- ask questions! there are many approaches to this prompt. definitely ask whether or not the array is mutable
- ** this question usually has, at most, one pair **
- all distinct numbers, no repeating numbers
- pairs will be distinct numbers as well
- can i sort/mutate the input array?
- be proactive by asking questions!!!!
- ** forgot to ask the edge case where no pairs can be found **
-


approach 1 (assumes you can mutate input array):
space time complexity: O(n)
sorting the array
using two pointers to iterate through the input array...
first pointer will be first index
second pointer will be the end
no need for storage variable

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
		} else if (currentSum < targetSum) {
			left++
		} else if (currentSum > targetSum) {
			right--
		}
	}
	return []
}


//Solution 3: Use Object /hash table to store remainder

function twoNumberSum3(array, targetSum) {
	let remainderColection = {}
	for (const num of array) {
		let potentialMatch = targetSum - num
		if (remainderColection.hasOwnProperty(potentialMatch)) {
			//(potentialMatch in remainderColection)
			return [potentialMatch, num]
		} else {
			remainderColection[num] = true
		}
	}

	return []
}



/* another case: return INDICES (INDEX) of two number that sumup to target => Can't sort
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example:
[3,5,-4,11,1,-1,6]
   ^

let set ={}

i=0 => potentialMatch = 10-3 = 7 => set doesn't has 7 -> set[3]: true => {3:true}
i=1 => potentialMatch = 10-5 = 5 => set[5]: true => {3:true, 5:true}
i=2 => potentialMatch = 10-(-4) = 14 => set[-4]: true => {3:true, 5:true, -4: true}
i=3 => potentialMatch = 10-11 = -1 => set[11]: true => {3:true, 5:true, -4:true, 11: true}
i=4 => potentialMatch = 10-1= 9 => set[1]: true => {3:true, 5:true, -4:true, 11: true, 1:true}
i=5 => potentialMatch = 10-(-1) = 11 => set[-1]: true => {3:true, 5:true, -4:true, 11: true, 1:true}
*/
var twoSum = function(nums, target) {
  let set ={}
  for(let i=0; i<nums.length; i++){
      let remainder = target-nums[i]
      if(remainder in set){
          return set[remainder]>i
					?[set[remainder],i]:
					[i,set[remainder]]

      }else{
          set[nums[i]]= i
      }

  }
    return []
};
