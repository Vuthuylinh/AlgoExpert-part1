/*
Given two non-empty arrays of integers, write a function that determines whether the second array is subsequence of the first one.
A subsequence of an array is a set is numbers that aren't neccessarily adjacent(right next)in the array but that are in the same order as they appear in the array.
Example:
arr1 =[1,2,3,4]
arr2=[1,2,3]
arr3 =[1,3]
=> arr2 and arr3 are subsequences of arr1

input: arr1, arr2 -potential subsequence
out put: true/false

Appoach:
- iterate arr1 and arr2 as the same time,
- use 2 pointers: indicate arr1 index and arr2 index
 if arr1 has the same character with arr2
  =>increase sequence index
  else: do nothing

 increase array index after increase sequence index to keep checking

*/

//Solution1 O(n) time| O(1) space

function isValidSubsequence(array, sequence) {

  let arrayIndex = 0;
  let sequenceIndex =0;
   while(arrayIndex< array.length && sequenceIndex < sequence.length){
     if(array[arrayIndex] === sequence[sequenceIndex]){
         sequenceIndex +=1;
     }
     arrayIndex+=1;
   }
     return sequenceIndex === sequence.length
 }

 isValidSubsequence()

// Solution2: O(n) time| O(1) space

function isValidSubsequence2(array, sequence) {
  let seqIndex=0
  for(const value of array){
    if(seqIndex===sequence.length) break;
    if(sequence[seqIndex]===value){
      seqIndex++
    }
  }
  return seqIndex===sequence.length? true:false
}
