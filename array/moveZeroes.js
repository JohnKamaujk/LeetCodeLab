// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] === 0) {
      if (nums[right] !== 0) {
        nums[left] = nums[right];
        nums[right] = 0;
        left++;
      }
    } else {
      left++;
    }
  }
  return nums;
};
