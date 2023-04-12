/**
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  const numsSum = nums.reduce((amount, curr) => (amount += curr), 0);
  let expectedFullSum = 0;
  for (let i = 1; i <= nums.length; i++) {
    expectedFullSum += i;
  }
  return expectedFullSum - numsSum;
};
