/**Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/
var majorityElement = function (nums) {
  const map = {};
  let majority = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1 + (map[nums[i]] || 0);
    if (map[nums[i]] > majority) {
      majority = map[nums[i]];
      result = nums[i];
    }
  }

  return result;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
//find size of array
//math floor  half its size
//use a hashmap(obj to track frequency)
//return > than half
