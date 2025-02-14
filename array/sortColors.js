/**
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var sortColors = function (nums) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  for (const num of nums) {
    if (num === 0) {
      count0++;
    } else if (num === 1) {
      count1++;
    } else {
      count2++;
    }
  }
  nums.fill(0, 0, count0);
  nums.fill(1, count0, count0 + count1);
  nums.fill(2, count0 + count1);
};
