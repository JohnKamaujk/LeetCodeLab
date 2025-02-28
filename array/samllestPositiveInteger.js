/**
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

function missingNumber(arr) {
  let n = arr.length;

  // To mark the occurrence of elements
  let vis = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    // if element is in range from 1 to n
    // then mark it as visited
    if (arr[i] > 0 && arr[i] <= n) vis[arr[i] - 1] = true;
  }

  // Find the first element which is unvisited
  // in the original array
  for (let i = 1; i <= n; i++) {
    if (!vis[i - 1]) {
      return i;
    }
  }

  // if all elements from 1 to n are visited
  // then n+1 will be first positive missing number
  return n + 1;
}
