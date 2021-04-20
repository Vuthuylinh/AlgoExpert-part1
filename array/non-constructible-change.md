# Non-Constructible Change

## Prompt

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't nessessarily unique (i.e, you can have multiple coins of the same value).
For example, if you are given `coins =[1,2,5]`, the minimum amount of change that you can't create 4. If you are given no coins, the minimum amount of change that you can't create is 1.

## Example:

- coins = [5,7,1,1,2,3,22]
- output: 20

## Approach

- sort the input array
- initialize a minimumChange =0
- keep track of this minimumChange when itereate the sorted array
  - if any coin has value > minimumChange +1 => return minimum +1
  - else keep accumulate minimumChange by adding up the coins in the sorted array
  - finally, finish looping, return minimum+1

## Solution:

```js
function findMinimumNonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let minimum = 0;
  for (let coin of coins) {
    if (coin > minimum + 1) return minimum + 1;
    minimum += coin;
  }
  return minimum + 1;
}
```
