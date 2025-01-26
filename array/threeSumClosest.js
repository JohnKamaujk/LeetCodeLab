/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
  let res = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    // Early exit if the smallest sum is already greater than the target
    if (nums[i] + nums[left] + nums[left + 1] > target) {
      if (
        Math.abs(nums[i] + nums[left] + nums[left + 1] - target) <
        Math.abs(res - target)
      ) {
        res = nums[i] + nums[left] + nums[left + 1];
      }
      break;
    }

    // Continue if the largest sum is smaller than the target
    if (nums[i] + nums[right] + nums[right - 1] < target) {
      if (
        Math.abs(nums[i] + nums[right] + nums[right - 1] - target) <
        Math.abs(res - target)
      ) {
        res = nums[i] + nums[right] + nums[right - 1];
      }
      continue;
    }

    while (left < right) {
      let sum = nums[right] + nums[left] + nums[i];
      if (sum === target) return target; // Exact match found
      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

