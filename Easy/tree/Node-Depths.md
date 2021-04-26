# Node Depths
### Prompt
The distance between a node in a Binary tree and the tree's root is call the node's depth.
Write a function that takes in a Binary tree and returns the sum of its nodes' depths.
Each BinaryTree node has an integer value, a left child node and a right child node. Children nodes can either be BinaryTree nodes themselves or Null/None.

### Example
- input:
```js
tree =        1
            /   \
           2     3
          / \    / \
         4   5  6   7
        / \
      8    9
```
- output: 16
- Explaination:
  `
  - the depth of the node with value 2 is : 1
  - the depth of the node with value 3 is : 1
  - the depth of the node with value 4 is : 2
  - ...
  - Summing all of these depths yields is 16

  `

