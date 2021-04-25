# Branch Sums

### Prompt:
Write a function that take in a `BinaryTree` and returns a list io its branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in Binary Tree branch is path of nodes in a tree that starts at the root node and ends at any leaf node.
Each `BinaryTree` node has an integer vale, a let child node and a right child node. Children nodes can either be BinaryTree nodes themselves or Null/None.

### Example:

- input:
 ```js
 tree =   1
        /   \
      2      3
    /  \    /  \
   4    5  6    7
 /  \   /
8    9 10

```
- output = `[15,15,18,10,11]`
- Explaination:
  `
  15 == 1+2+4+8
  16 == 1+2+4+9
  18 == 1+2+5+10
  10 == 1+3+6
  11 == 1+3+7
  `
