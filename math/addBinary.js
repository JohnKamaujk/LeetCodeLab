/**
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

* @param {string} a
* @param {string} b
* @return {string}
*/
var addBinary = function (a, b) {
  let result = [];
  let carry = 0;
  let i = a.length - 1,
    j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--], 10); // Add bit from a
    if (j >= 0) sum += parseInt(b[j--], 10); // Add bit from b
    result.unshift((sum % 2).toString()); // Prepend the result with the current bit
    carry = Math.floor(sum / 2); // Calculate the new carry
  }

  return result.join("");
};

