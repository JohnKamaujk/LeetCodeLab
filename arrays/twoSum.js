// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let object = {};
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    let otherPair = target - nums[i];
    if (object[nums[i]] === otherPair) {
      indices.push(nums.indexOf(otherPair), i);
    } else {
      object[otherPair] = nums[i];
    }
  }
  return indices;
};
