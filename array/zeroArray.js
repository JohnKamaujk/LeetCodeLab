/**
You are given an integer array nums of length n and a 2D array queries, where queries[i] = [li, ri].

For each queries[i]:

Select a subset of indices within the range [li, ri] in nums.
Decrement the values at the selected indices by 1.
A Zero Array is an array where all elements are equal to 0.

Return true if it is possible to transform nums into a Zero Array after processing all the queries sequentially, otherwise return false.

Example 1:
Input: nums = [1,0,1], queries = [[0,2]]
Output: true

Explanation:
For i = 0:
Select the subset of indices as [0, 2] and decrement the values at these indices by 1.
The array will become [0, 0, 0], which is a Zero Array.

Example 2:
Input: nums = [4,3,2,1], queries = [[1,3],[0,2]]
Output: false

Explanation:
For i = 0:
Select the subset of indices as [1, 2, 3] and decrement the values at these indices by 1.
The array will become [4, 2, 1, 0].
For i = 1:
Select the subset of indices as [0, 1, 2] and decrement the values at these indices by 1.
The array will become [3, 1, 0, 0], which is not a Zero Array.
 
Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i].length == 2
0 <= li <= ri < nums.length

* @param {number[]} nums
* @param {number[][]} queries
* @return {boolean}
*/
var isZeroArray = function (nums, queries) {
  const n = nums.length;

  const differenceArray = Array(n + 1).fill(0);

  // Apply the queries to the difference array
  for (const [left, right] of queries) {
    differenceArray[left]++;
    differenceArray[right + 1]--;
  }

  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum += differenceArray[i];
    if (nums[i] > currentSum) {
      // Check if current element in nums is greater than current sum
      return false; // If yes, return false as it's not possible to make it zero
    }
  }
  return true;
};

