/**
Given an integer array nums, find the subarray with the largest sum, and return its sum.

 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //Kadane’s algorithm
  let maxint = Math.pow(2, 53);
  let max_so_far = -maxint - 1;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
};
