# Depth First search

## Prompt

You are given a `Node` class that has a `name` and an array of optional `children` nodes. When put together, nodes form an acryclic tree like structure.

Implement the `depthFirstSearch` method on the `Node` class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from the left to the right), stores all of the nodes' names in the input array, and returns it.

## Sample
 - input:
```js
  graph =  A
        /  |  \
      B    C    D
     / \       / \
    E   F     G    H
       / \    \
      I   J    K

```
- output:
  `[A,B,E,I,J,C,D,G,K,H]`
