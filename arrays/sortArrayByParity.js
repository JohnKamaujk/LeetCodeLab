/**
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
Input: nums = [0]
Output: [0]

* @param {number[]} nums
* @return {number[]}
*/
var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;
  let result = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      //add to the beginning
      result.unshift(num);
    } else {
      //add to the end
      result.push(num);
    }
  }
  return result;
};