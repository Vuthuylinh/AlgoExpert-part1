# Find Closest value in BST

## Prompt
 Write a function that takes in a Binary Search tree (BST) and a target integer value and returns the closet value to that target value contained in the BST.
 You can assume that there will only be one closet value.
 Eac BST node has an integer value, a left child node and a right child node. A nde is said to be valid BSR node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; it value is less or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/Null


## Approach1: Using Recursion - Time
- Average O(log(n)) Time| O(log(n)) Space
- Worst O(n)|  O(n)Space
- initialize  `closetValue = root.value`
- traversal the tree - compare target value and currentNode value
- current node start from root node
  - if `currentValue === target` =>`closetValue= target.value`
  - if `currentValue < target` => ignore the left => `currentNode = this.right`
	- if `currentValue > target` => ignore the right => `currentNode = this.left`


```js
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function helper(currentNode, target, closestValue){
	if(currentNode === null) return closestValue

	if(Math.abs(target-closestValue)> Math.abs(target- currentNode.value)){
		closestValue = currentNode.value
	}

	if(target < currentNode.value){
		//currentNode = currentNode.left
		return helper(currentNode.left, target, closestValue)
	}else if(target> currentNode.value){
		//currentNode = currentNode.right
		return helper(currentNode.right, target, closestValue)
	}else{

		return closestValue
	}
}

function findClosestValueInBst(tree, target) {
return helper(tree, target, tree.value)

}
```
