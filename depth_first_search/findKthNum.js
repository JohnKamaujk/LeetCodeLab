/**
Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

Example 1:
Input: n = 13, k = 2
Output: 10
Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

Example 2:
Input: n = 1, k = 1
Output: 1
 
Constraints:
1 <= k <= n <= 109

* @param {number} n
* @param {number} k
* @return {number}
*/
var findKthNumber = function (n, k) {
  function getCount(prefix, n) {
    let count = 0;
    let curr = prefix;
    let next = prefix + 1;
    while (curr <= n) {
      count += Math.min(n + 1, next) - curr;
      curr *= 10;
      next *= 10;
    }
    return count;
  }

  let curr = 1;
  k--;

  while (k > 0) {
    const count = getCount(curr, n);
    if (k >= count) {
      k -= count;
      curr += 1;
    } else {
      k--;
      curr *= 10;
    }
  }

  return curr;
};
