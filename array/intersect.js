/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1);
  
  let freqMap = {};
  let result = [];

  for (const num of nums1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (freqMap[num] > 0) {
      result.push(num);
      freqMap[num]--;
    }
  }
  return result;
};
