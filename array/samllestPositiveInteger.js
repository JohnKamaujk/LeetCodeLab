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

* Finds the first positive missing number in a given array.
* 
* @param {number[]} arr - Input array of integers.
* @returns {number} The first positive missing number.
*/

function missingNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  const arrayLength = arr.length;
  const presenceTracker = new Array(arrayLength).fill(false);

  for (let i = 0; i < arrayLength; i++) {
    if (Number.isInteger(arr[i]) && arr[i] > 0 && arr[i] <= arrayLength) {
      presenceTracker[arr[i] - 1] = true;
    }
  }

  for (let i = 1; i <= arrayLength; i++) {
    if (!presenceTracker[i - 1]) {
      return i;
    }
  }

  return arrayLength + 1;
}
