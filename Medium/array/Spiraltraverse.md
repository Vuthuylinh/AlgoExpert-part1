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
        [1, 2, 3, 4],
        [12,13,14,5],
        [11,16,15,6],
        [10, 9, 8,7]
      ]
- result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

```
