# Find Kth largest Value in BST

Write a function that takes in a Binary Search Tree (BST) and a positive integer `k`, and returns the `kth` largest integer contained in the BST.
You can assume that there will only be the integer values in the `BST` and that `k` is less than or equal to the number of nodes in the tree.
Also, for purpose of this question, uplicate integers will be treated as distinct values. In other words, the second largest value in a `BST` conatining values `{5,7,7}` will be `7` not `5`.
Each `BST` node has an integer `value`, a `left` chil node, and a `right` child node. A node to be said to be valid `BST` node if and only if it satisfies the `BST` property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or equal to the value of every node to its right;
and its children nodes has to
