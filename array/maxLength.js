/**
You are given an array of positive integers nums.
An array arr is called product equivalent if prod(arr) == lcm(arr) * gcd(arr), where:

prod(arr) is the product of all elements of arr.
gcd(arr) is the GCD of all elements of arr.
lcm(arr) is the LCM of all elements of arr.
Return the length of the longest product equivalent subarray of nums.

Example 1:
Input: nums = [1,2,1,2,1,1,1]

Output: 5

Explanation: 
The longest product equivalent subarray is [1, 2, 1, 1, 1], where prod([1, 2, 1, 1, 1]) = 2, gcd([1, 2, 1, 1, 1]) = 1, and lcm([1, 2, 1, 1, 1]) = 2.

Example 2:
Input: nums = [2,3,4,5,6]

Output: 3

Explanation: 
The longest product equivalent subarray is [3, 4, 5].

Example 3:
Input: nums = [1,2,3,1,4,5,1]

Output: 5


* @param {number[]} nums
* @return {number}
*/
var maxLength = function (nums) {
  let maxLen = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let prodVal = (gcdVal = lcmVal = nums[i]);

    for (let j = i + 1; j < nums.length; j++) {
      prodVal = prod(prodVal, nums[j]);
      lcmVal = lcm(lcmVal, nums[j]);
      gcdVal = gcd(gcdVal, nums[j]);

      if (prodVal === lcmVal * gcdVal) maxLen = Math.max(j - i + 1, maxLen);
    }
  }

  return maxLen;
};

function prod(a, b) {
  return a * b;
}

function lcm(a, b) {
  return prod(a, b) / gcd(a, b);
}

function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
