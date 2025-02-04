/**
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3

Example 2:
Input: nums = [0,1,0,1,0,1,99]
Output: 99

* @param {number[]} nums
* @return {number}
*/
var singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < sortedNums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const arr = Array.from(map);
  return arr.find((num) => num[1] === 1)[0];
};
