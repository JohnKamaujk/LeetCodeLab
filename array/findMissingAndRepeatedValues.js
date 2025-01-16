/**
You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

Example 1:
Input: grid = [[1,3],[2,2]]
Output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

Example 2:
Input: grid = [[9,1,7],[8,9,2],[3,4,6]]
Output: [9,5]
Explanation: Number 9 is repeated and number 5 is missing so the answer is [9,5].

* @param {number[][]} grid
* @return {number[]}
*/
var findMissingAndRepeatedValues = function (grid) {
  const len = grid.length;
  const count = new Array(len * len + 1).fill(0);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      count[grid[i][j]]++;
    }
  }

  let repeated = -1;
  let missing = -1;
  const lenNums = len * len;
  for (let num = 1; num <= lenNums; num++) {
    if (count[num] === 2) repeated = num;
    if (count[num] === 0) missing = num;
    if (repeated != -1 && missing != -1) return [repeated, missing];
  }

  return [repeated, missing];
};
