/*
You are given an array nums of n integers and two integers k and x.
The x-sum of an array is calculated by the following procedure:

Count the occurrences of all elements in the array.
Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
Calculate the sum of the resulting array.
Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the 
subarray nums[i..i + k - 1].

Example 1:
Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]

Explanation:
For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.

Example 2:
Input: nums = [3,8,7,8,7,5], k = 2, x = 2
Output: [11,15,15,15,12]

Explanation:
Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].
* @param {number[]} nums
* @param {number} k
* @param {number} x
* @return {number[]}
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let temp_arr = [...nums].slice(i, i + k);
    let count = {};

    for (let j = 0; j < temp_arr.length; j++) {
      const num = temp_arr[j];
      count[num] = (count[num] || 0) + 1;
    }

    console.log(count);

    const sum = Object.entries(count)
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return b[0] - a[0];
      })
      .slice(0, x)
      .reduce((prev, curr) => prev + curr[0] * curr[1], 0);

    result.push(sum);
  }

  return result;
};