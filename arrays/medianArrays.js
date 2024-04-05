/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. 

* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedLength = nums1.length + nums2.length;
  let index1 = 0;
  let index2 = 0;
  let merged = [];

  for (let i = 0; i < mergedLength; i++) {
    if (nums1[index1] <= nums2[index2] || nums2.length === index2) {
      merged.push(nums1[index1]);
      index1 += 1;
    } else {
      merged.push(nums2[index2]);
      index2 += 1;
    }
  }

  if (mergedLength % 2 === 0) {
    let middleRight = merged[mergedLength / 2];
    let middleLeft = merged[mergedLength / 2 - 1];
    return (middleRight + middleLeft) / 2;
  } else {
    return merged[Math.floor(mergedLength / 2)];
  }
};

