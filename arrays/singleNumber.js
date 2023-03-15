// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return Object.entries(obj).find((item) => item[1] === 1)[0];

  //most effecient using XOR operation
  // let a = 0;
  // for(let val of nums){
  //     a ^= val;
  // }
  // return a;
};

