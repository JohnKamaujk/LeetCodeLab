/**
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

 

Example 1:

Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.
Example 2:

Input: num = 7
Output: false

* @param {number} num
* @return {boolean}
*/

var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let left = 2;
  let right = Math.floor(num / 2);
  let sum = 1;

  while (left < right) {
    if (num % left === 0) {
      sum += left;
      sum += num / left;
      right = num / left;
    }
    left++;
  }

  return sum === num;
};
