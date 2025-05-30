/**
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

Example 1:
Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:
Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:
Input: nums = [1,1,5]
Output: [1,5,1]

* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var nextPermutation = function (nums) {
  let n = nums.length;

  // Step 1: Find the first decreasing element from the end
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // Step 2: If such an element is found, swap with the next larger element
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  // Step 3: Reverse the portion after the swap point
  reverse(nums, i + 1);

  // Helper function to swap two elements
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Helper function to reverse from a given index to the end
  function reverse(arr, start) {
    let end = arr.length - 1;
    while (start < end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
};

