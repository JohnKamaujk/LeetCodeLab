/**
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
 
Constraints:
1 <= arr.length <= 500
1 <= arr[i] <= 500

* @param {number[]} arr
* @return {number}
*/
var findLucky = function (arr) {
  const freq = new Map();
  
  for (const num of arr) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  let luckyNum = -1;

  for (const [key, value] of freq.entries()) {
    if (key === value) {
      if (key > luckyNum) {
        luckyNum = key;
      }
    }
  }

  return luckyNum;
};
