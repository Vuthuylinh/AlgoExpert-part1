/*
Nth Fibonacci
The Fibonacci sequence is defined as follows: The first number of the sequence is 0; the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers. Write a function that takes in an integer n and reutrn the nth Fibonacci number.
Important node: the Fibonacci sequence is oftent defined with it first two number as F0 =0; F1=1. For the purpose of this qiestion, the first ibonacci number is F0; therefore, getNthFib(1) is equal to F0; getNthFib(2) is equal to F1, etc..


Example:
n=1 => getNthFib(1)=0;  return 1
n=2 => getNthFib(2)=>  // 0,1  => reutrn 1
n=3 => getNthFib(3)=> // 0,1, 1 => return 1   0+1= 1
n=4 => getNthFib(4)=> // 0,1,1,2 => return 2  1+1 =2
n= 5 => getNthFib(5)=> // 0,1,1,2,3 => return 3 1+2 =3
n= 6 => getNthFib(6)=> // 0,1,1,2,3,5 => return 5  2+3 =5
*/

//Solution1:
function getNthFib1(n) {
  if (n <= 1) {
    return 0
  } else if (n === 2) {
    return 1
  } else {
    return getNthFib1(n - 1) + getNthFib1(n - 2)
  }

}

//Solution2: Use hash table

function getNthFib2(n) {
  let set = {
    1: 0,
    2: 1
  }

  if (!set[n]) {
    for (let i = 3; i <= n; i++) {
      set[i] = set[i - 1] + set[i - 2]
    }
  }

  return set[n]
}


//Solution3: moemoize
//O(n) time | O(n) space

function getNthFib3(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n]
  } else {
    memoize[n] = getNthFib3(n - 1, memoize) + getNthFib3(n - 2, memoize)
    return memoize[n]
  }

}

//Solution 4: Optimal -use 2 pointers
//O(n) time | O(1) space

function getNthFib4(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}
