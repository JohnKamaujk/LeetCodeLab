/**
Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

Example 1:
Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

Example 2:
Input: n = 2
Output: [1,2]
 
Constraints:
1 <= n <= 5 * 104

* @param {number} n
* @return {number[]}
*/
var lexicalOrder = function (n) {
  const result = [];

  function dfs(current) {
    if (current > n) return;
    result.push(current);
    for (let i = 0; i <= 9; i++) {
      const next = current * 10 + i;
      if (next > n) return;
      dfs(next);
    }
  }

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return result;
};
