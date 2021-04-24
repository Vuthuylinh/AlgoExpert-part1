# Validate Binary Search Tree

## Prompt:
 Write a function that takes in a potentially invalid Binary Search Tree(BST) and returns a boolean representing whether the BST is valid.
 Each BST node has an integer value, a left child node and a right child node. A node is said to be valid BST node if and only if it satisfies the BST property: its value is trictly greater than the values of every nodeto its left; its value is less than or equal to the value of every node to its right; and its children nodes are either valid BST nodes themselves or None/null.
 A BST is valud if and only if its node are valid BST nodes.

### Edge case:
- `tree === null` => return true
 ## Sample:
 ```js
 tree  =             10
                    /   \
                   5     15
                  / \    / \
                 2   5  13   22
                /         \
               1          14
 ```
## Approach

## Solution:

```js
class BST{
  constructor(val){
    this.value = value;
    this.left = null;
    this.right = null
  }
}
const validateHelper =(tree, minValue, maxValue)=>{
	if(tree === null){
	return true
}
	if(tree.value < minValue || tree.value >= maxValue){
		return false
	}
	const leftIsValid = validateHelper(tree.left, minValue, tree.value)
	const rightIsValid = validateHelper(tree.right, tree.value, maxValue)
	return leftIsValid && rightIsValid
}
function validateBst(tree){
 return validateHelper(tree, -Infinity, Infinity)
}


```
