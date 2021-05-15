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

- in BST, every node has possible maximum value and minimum value:
  - root node has maximum value = Infinity; minimum value = -Infinity
  - each node has maximum value <= right node value; minimum value >left node value
- use a helper function to check validate of:
  - tree? null => true
  - tree> maximum || tree< minimum => false
  - if tree is validate:
    - check isLeftValidate by calling helper function recursively; with new max = tree.value; keep min = -Infinity
    - check isRightValidate by calling helper function recursively; with new min = tree.value; keep max = Infinity

## Solution:

```js
class BST {
  constructor(val) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const validateHelper = (tree, minValue, maxValue) => {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  //check left with new max = tree.value; keep min= -Infinity
  const leftIsValid = validateHelper(tree.left, minValue, tree.value);

 //check right with new min= tree.value; keep max = Infinity
  const rightIsValid = validateHelper(tree.right, tree.value, maxValue);

  return leftIsValid && rightIsValid;
};

function validateBst(tree) {
  return validateHelper(tree, -Infinity, Infinity);
}
```
