/**
You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

Example 1:
Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].

Example 2:
Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].
 
Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 104

* @param {number[]} nums
* @return {number}
*/

let frequency = new Array(10001).fill(0);

var maximumUniqueSubarray = function (nums) {
  const numsSize = nums.length;

  // Create an array to store the prefix sum of nums
  let prefixSum = new Array(numsSize + 1);
  prefixSum[0] = 0;

  for (let i = 0; i < numsSize; ++i) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let maxSum = 0;

  let startIndex = 0;

  for (let i = 1; i <= numsSize; ++i) {
    let currentValue = nums[i - 1];

    // Update the startIndex to be the maximum of the current startIndex or the
    // last index where currentValue was found (to maintain uniqueness in subarray)
    startIndex = Math.max(startIndex, frequency[currentValue]);

    // Calculate the maxSum by considering the current unique subarray sum
    maxSum = Math.max(maxSum, prefixSum[i] - prefixSum[startIndex]);

    // Update the index in frequency array to the current position for currentValue
    frequency[currentValue] = i;
  }

  return maxSum;
};
