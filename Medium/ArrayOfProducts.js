/*
Write a fucntion that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
In other words, the value at output[i] is equal to product of every number in the input aray other than input[i]
Note that you are expected to solve this problem without using devison.

Example:
input: [5,1,4,2]
output:[8,40,10,20]

*/
/*
Approach1: Brute force:
use nested loop:
- outer loop(i):
    set initial product =1
- inner loop(j): iterate the array again and check
if the j!=i => product *=arra[j]

*/
