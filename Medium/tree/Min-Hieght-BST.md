# Min Height BST

## Prompt:
- Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers and returns the root of the BST.
The function should minimize the hight of the BST.
- You've been provided with a BST class that you will have o use to construct the BST.
- Each `BST` node has an integer value, a left child node and a right child node. A node is said to be valid `BST` node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST node themselves or Null/None.
A BST is valid if and only of all of its nodes are valid BST nodes.
- Note: BST class are already has an insert method which you can use if you want.

## Example:

- input: array =`[1,2,5,7,10,13,14,15,22]`
- output:
```js
                        10
                       /  \
                     2     14
                    / \    /  \
                   1   5  13   15
                        \        \
                         7        22
```

### Hints:
- in order for BST to have minimum height possible, it need to be balanced; in other words, it needs to have roughtly the same number of node each side left - right
- the input array is sorted => find the middle elementof input array is the mid index, will also be the mid point of value. the mid point will be root node; continute the approach until run out of elements in the array.

## Approach:
- use a helper function to contructMiddle -> insert root node
- constructMiddle has 4 arguments: array, bst, startIndx and endIndx
- midIndx = Math.floor((startIndx + endIndx)/2)
- midValue = array[midIndx]
    - if bst === null -> bst = new BST(midValue)
    - else bst.insert(midValue)
- constructMiddle for the left: constructMiddle(array,bst,startIndx; midIndx-1)
- constructMiddle for the right: constructMiddle(array,bst, midIndx+1; endIndx)

- return constructMiddle(array,null,0,array.lenght-1)

## Solution

#### Prerequired
- BST construction with insert method
