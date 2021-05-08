# BST Construction
## Prompt
Write a BST class for a Binary Search Tree. The clas should support:
  - Inserting vakues with the `insert` method
  - Removing value with the `remove` method; this method should only remove the first instance of a given value
  - Searching for values with `contains` method.
Note that you can't remove values from a single-node tree. In other words, calling the remove method on a single-node tree should simply not do anything.
Each BST node has an integer value, a left child node and a right child node. A node is saod to be a valid BST node id and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left, its value less than or equal to every the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/ null.

# Sample:
```js

 BST tree =        10
                  /  \
                5     15
              /  \    / \
             2    5  13  22
            /         \
           1           14

 - insert(12)

                   10
                  /  \
                5     15
              /  \    / \
             2    5  13  22
            /        / \
           1        12  14

- remove(10)
                   12
                  /  \
                5     15
              /  \    / \
             2    5  13  22
            /         \
           1           14

- contains(15): true
```
### Approach
1. Insert
Solution 1
- initialize current node
- compare inserted value and current node value
* if inserted value < current value
     - if current.left === null -> current.left = new BST(inserted value) ; break
     - if current.left !== null -> current node = current.left
* if inserted value > current value
     - if current.right === null -> current.right = new BST(inserted value); break
     - if current.right !==null -> current = current.right

Solution2:
- compare this.value with inserted value
- if this.value> inserted value:
    - if this.left === null -> this.left = new BST(inserted value)
    - if this.left !== null -> this.left.insert(inserted value)
- if this.value < inserted value:
    - if this.right ===null -> this.right
### Solution
 ```js
class BST {
   constructor(val){
     this.value = val
     this.left = null
     this.right = null
   }

   insert(value){
     if(value<this.value){
       if(this.left === null){
         this.left = new BST(value)
       }else{
         this.left.insert(value)
       }
     }else{
       if(this.right ===null){
         this.right= new BST (value)
       }else{
         this.right.insert(value)
       }
     }
     return this
   }

 }
 ```
