# Spiral Traverse

## Prompt:

Write a function that takes in an `n * m` two-dimensional array (that can be square shap if n===m) and returns a one-dimensional array of all the array's elements in spiral order.
Spiral order starts at the top left conner of the two-dimensional array, goes to the right, and proceeds in a spiral pattrn all the way untill every element has been visited.

```js
 -> -> ->
        |
 ^ ->   |
 |<- |  |
 <- <- <-

```

## Sample

```js
 - input: array = [

   col = 0  1  2  3
row=0   [1, 2, 3, 4],
row=1   [12,13,14,5],
row=2   [11,16,15,6],
row=3   [10, 9, 8,7]

      ]
- result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

```

## Approach:

- initialize array of result =[]
- startRow =0
- endRow = array.length-1
- startCol =0
- endCol = array[0].length-1
- use while loop: `startRow <= endRow && startCol <= endCol`
- use 4 for loop to traverese from left-> right; top ->bottom; righ->left; bottom->top
  - iterate col left->right : `col = startCol-> endCol`; with the same `startRow`
  - iterate row top->bottom : `row = rowStart+1 -> endRow`; with the same `endCol`
  - iterate col right->left : `col=endCol-1 ->startCol`; with the same `endRow`; also check if `startRow=== endRow` -> `break`
  - iterate row bottom ->top: `row = rowEnd-1 -> rowStart+1`; with the same `startCol`; also check if `startCol ===endCol` -> `break`
  - after 4 for loops:
    - startRow++;
    - endRow--;
    - starCol++
    - endCol--
- return result

## Solution:

```js
function spiralTraverse(array) {
  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //col: left->right; same startRow
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    //row: top->bottom; same endCol
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    //col: right-left; same endRow
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    //row: bottom-> top-1; same startCol
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}
```
