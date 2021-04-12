# BST Traversal

## Prompt
 Write three functions that take in a Binary Search Tree (BST) and an empty array,
 traverse the BST add its nodes' values to the input array, and return that array. The three functions should traverse the BST using in-order, pre-order and post-order tree traversal technique, respectively.

 Each BST node has an integer value, a left child node and a right child node. A node is said to be valid BST node if and only if it satisfies the BST property: its value is stricly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right, and its children node are either valid BST nodes themslves or Null/None

 If you are unfamiliar with tree-traversal techniques, we are recommend:
- Use callstack and visualize by white board
- in-order: left most -> current -> right (sorted array from small -> big)
- Pre-order: current-> left top -> right top
- Post-order: left most -right most -current

# Example:

 - input
```js
        tree:     10
                  /  \
                5     15
              /  \      \
            2      5      22
          /
        1
```
- output:
    - in-order: [1,2,5,5,10,15,22]
    - pre-order:[10,5,2,1,5,15,22]
    - post order [1,2,5,5,22,15,10]


## Solution:

```js
//Time O(n)| Space O(n)
function inOrderTraverse(tree, array) {
if(tree!==null){
	inOrderTraverse(tree.left, array)
	array.push(tree.value)
	inOrderTraverse(tree.right, array)
}
	return array
}

//Time O(n)| Space O(n)
function preOrderTraverse(tree, array) {
  if(tree !==null){
		array.push(tree.value)
		preOrderTraverse(tree.left, array)
		preOrderTraverse(tree.right, array)
	}
	return array
}

//Time O(n)| Space O(n)
function postOrderTraverse(tree, array) {
if(tree!==null){
	postOrderTraverse(tree.left, array)
	postOrderTraverse(tree.right,array)
	array.push(tree.value)
}
	return array
}
```
