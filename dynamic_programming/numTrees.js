/**
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
 
Example 1:
Input: n = 3
Output: 5

Example 2:
Input: n = 1
Output: 1

* @param {number} n
* @return {number}
*/
var numTrees = function (n) {
  let uniqTree = Array(n + 1).fill(1);

  for (let nodes = 2; nodes <= n; nodes++) {
    let total = 0;
    for (let root = 1; root <= nodes; root++) {
      total += uniqTree[root - 1] * uniqTree[nodes - root];
    }
    uniqTree[nodes] = total;
  }

  return uniqTree[n];
};
