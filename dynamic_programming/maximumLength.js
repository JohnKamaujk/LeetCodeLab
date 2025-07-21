/**
You are given an integer array nums.
A subsequence sub of nums with length x is called valid if it satisfies:

(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.
Return the length of the longest valid subsequence of nums.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,2,3,4]
Output: 4

Explanation:
The longest valid subsequence is [1, 2, 3, 4].

Example 2:
Input: nums = [1,2,1,1,2,1,2]
Output: 6

Explanation:
The longest valid subsequence is [1, 2, 1, 2, 1, 2].

Example 3:
Input: nums = [1,3]
Output: 2

Explanation:
The longest valid subsequence is [1, 3].

Constraints:
2 <= nums.length <= 2 * 1051 <= nums[i] <= 107

* @param {number[]} nums
* @return {number}
*/
var maximumLength = function (nums) {
  const k = 2; // modulus base 'k'
  const f = Array.from({ length: k }, () => Array(k).fill(0)); // Create a 2D array of size k x k, initialized to 0
  let ans = 0; // store the maximum subarray length

  for (let x of nums) {
    x %= k; // Take modulus of current number to classify based on remainder

    // Iterate through possible remainders
    for (let j = 0; j < k; ++j) {
      const y = (j - x + k) % k; // Calculate adjusted index for modular arithmetic to handle negative results

      // Update the subarray length for the current remainder configuration
      f[x][y] = f[y][x] + 1;

      ans = Math.max(ans, f[x][y]);
    }
  }

  return ans;
};
