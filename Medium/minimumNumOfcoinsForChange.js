/*
Given an array of positive integers representing coin denominations and single non-negative integer(n) represent a target amount of money. Write a function that returns the smallest number of coins needed to make change for(to sum up to) that target amount using the given coin denominations.
Note that you have access to an unlimited amount of coins. in other words, if the denominations are [1,5,10], you have access to unlimited amount of 1s, 5s and 10s.
If it is impossible to make change for the target amoun, return -1.


Example:
input:    n= 7
          denoms =[1,5,10]
output: 3
        because: 1*2 + 5*1 = 7

Approach:
- if num = 0 -> return 0
- if num === denoms[i] => return 1
- if change > 0 -> can't find: return -1

-----------------------------------------------------------------

- initialize an array(numOfCoins) with length = num+1 to store the minimum number of coins to create each value from 0 to num.
  + at first, we fill the array numOfCoins with infinity because we don't know the exact number yet.
  + we also set numOfCoin[0]=0 -> because we need 0 coin to create value 0
- use nested loop to find the minimum num of coins for every value from 0 to num
   + outer loop: iterate the denoms
   + inner loop: iterate value from 0 to num
   we want to see how many coins are needed  when we have 1 kind of denom, then 2 kinds of denoms, and increase more kinds of denoms after each outer loop.
      *  if any denom === value  => for this value, with this kind of denom we need only 1 coin => numOfCoins[value] =1
      *  if denom < value => compare


  if denom > value => we don't make any change at the numOfCoins; just move on to the next value so we don't write it in here.

- after finish the loop: we want to return numOfCoins[n]
if numOfCoins ===infinity => return -1


*/

function coinChange(coins, amount) {
  let dp = [0].concat(Array(amount).fill(Infinity));
  const length = amount + 1;

  for(const coin of coins) {
      for (let i = coin ; i < length ; i++) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
