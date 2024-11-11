/**
You are given two integers n and t. Return the smallest number greater than or equal to n such that the product of its digits is divisible by t.
 

Example 1:
Input: n = 10, t = 2
Output: 10

Explanation:
The digit product of 10 is 0, which is divisible by 2, making it the smallest number greater than or equal to 10 that satisfies the condition.

Example 2:
Input: n = 15, t = 3
Output: 16

Explanation:
The digit product of 16 is 6, which is divisible by 3, making it the smallest number greater than or equal to 15 that satisfies the condition.

* @param {number} n
* @param {number} t
* @return {number}
*/
var smallestNumber = function (n, t) {
  const lastDigit = n % 10;

  if (lastDigit === 0) return n;

  // Get the significant digits of `n` by removing the last digit.
  const baseNumber = Math.floor(n / 10) || 1;

  for (let increment = 0; increment < 10 - lastDigit; increment++) {
    // Check if the incremented number is divisible by `t`.
    if ((baseNumber * (lastDigit + increment)) % t === 0) {
      return n + increment;
    }
  }

  // If no match found, return the nearest higher multiple of 10.
  return n + (10 - lastDigit);
};
