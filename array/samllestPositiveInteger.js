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
  arr.sort((a, b) => a - b);

  // ans will hold the current smallest missing number,
  // initially set to 1
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    // If we have found 'res' in the array,
    // 'res' is no longer missing, so increment it
    if (arr[i] == res) {
      res++;
    }

    // If the current element is larger than 'res',
    // 'res' cannot be found in the array,
    // so it is our final answer
    else if (arr[i] > res) {
      break;
    }
  }
  return res;
}
