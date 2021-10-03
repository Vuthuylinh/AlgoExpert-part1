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
  + iterate input array, each step will fix current element and switch postion of the rest
  + index 0: fix `1`, the rest =[2,3] => permutations: [2,3] and [3,2] => [1,2,3], [1,3,2]
  + index 1: fix `2`, the rest =[1,3] => permutations: [1,3] and [3,1] => [2,1,3], [2,3,1]
  + index 3: fix `3`, the rest =[2,1] => permutations: [1,2] and [2,1] => [3,1,2], [3,2,1]
  + restult:[[1,2,3], [1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

