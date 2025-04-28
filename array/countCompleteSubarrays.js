/**
You are given an array nums consisting of positive integers.

We call a subarray of an array complete if the following condition is satisfied:

The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
Return the number of complete subarrays.
A subarray is a contiguous non-empty part of an array.

Example 1:
Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

Example 2:
Input: nums = [5,5,5,5]
Output: 10
Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.

* @param {number[]} nums
* @return {number}
*/
// var countCompleteSubarrays = function (nums) {
//   let count = 0;
//   n = nums.length;
//   totalDistinct = new Set(nums).size;

//   for (let i = 0; i < n; i++) {
//     let freq = new Map();
//     for (let j = i; j < n; j++) {
//       freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
//       if (freq.size === totalDistinct) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const countCompleteSubarrays = (nums) => {
  let answer = 0;
  const distinct = new Set(nums); // Get distinct elements in the array
  const store = new Map(); // Store frequencies of elements in the current window
  let l = 0; // Left pointer

  // Iterate with the right pointer `r`
  for (let r = 0; r < nums.length; r++) {
    // Add current element to the window
    store.set(nums[r], (store.get(nums[r]) ?? 0) + 1);

    // When the window contains all distinct elements
    while (store.size === distinct.size) {
      // Count valid subarrays ending at r (all subarrays from l to r are valid)
      answer += nums.length - r;

      // Shrink the window by moving the left pointer
      store.set(nums[l], store.get(nums[l]) - 1);
      if (store.get(nums[l]) === 0) {
        store.delete(nums[l]);
      }
      l++;
    }
  }

  return answer;
};


console.log(countCompleteSubarrays([7,3,7,3,1,3])) //6
