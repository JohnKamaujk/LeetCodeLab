/**
Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.

The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

Example 1:
Input: nums = [3,1]
Output: 2
Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]

Example 2:
Input: nums = [2,2,2]
Output: 7
Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 23 - 1 = 7 total subsets.

Example 3:
Input: nums = [3,2,1,5]
Output: 6
Explanation: The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:
- [3,5]
- [3,1,5]
- [3,2,5]
- [3,2,1,5]
- [2,5]
- [2,1,5]
 
Constraints:
1 <= nums.length <= 16
1 <= nums[i] <= 105

* @param {number[]} nums
* @return {number}
*/
var countMaxOrSubsets = function (nums) {
  let totalElements = nums.length;
  // Variable to store the maximum OR value across all subsets.
  let maxOrValue = 0;
  // Calculate the maximum OR value by iterating through the array.
  for (let i = 0; i < totalElements; i++) {
    maxOrValue |= nums[i];
  }
  // A count of subsets that have the maximum OR value.
  let maxOrSubsetsCount = 0;

  // Recursive helper function to perform depth-first search.
  function dfs(currentOr, depth) {
    // If this is the end of the array, check if the current OR is the maximum OR.
    if (depth == totalElements) {
      if (currentOr == maxOrValue) {
        // Increment the count if the current OR is equal to max OR.
        maxOrSubsetsCount++;
      }
      return;
    }
    // case when the current number is not taken
    dfs(currentOr, depth + 1);
    // case when the current number is taken, it is ORed with the currentOr.
    dfs(currentOr | nums[depth], depth + 1);
  }

  // Start the depth-first search with an initial OR value of 0 and at depth 0.
  dfs(0, 0);

  // Return the number of subsets that have the maximum OR value.
  return maxOrSubsetsCount;
};
