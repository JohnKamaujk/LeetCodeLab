/**
Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.

Example 1:

Input: num = 26
Output: "1a"

Example 2:
Input: num = -1
Output: "ffffffff"
 
Constraints:
-231 <= num <= 231 - 1

* @param {number} num
* @return {string}
*/
var toHex = function (num) {
  if (num === 0) {
    return "0";
  }

  let hexString = "";

  // Iterate over each hex digit from the most significant to least significant
  for (let i = 7; i >= 0; i--) {
    // Extract current hex digit from the number
    const hexDigit = (num >> (4 * i)) & 0xf;

    // Skip leading zeros
    if (hexString.length > 0 || hexDigit !== 0) {
      // Convert the current digit to its hex char representation
      const hexChar =
        hexDigit < 10
          ? String.fromCharCode(hexDigit + "0".charCodeAt(0))
          : String.fromCharCode(hexDigit - 10 + "a".charCodeAt(0));
      hexString += hexChar;
    }
  }

  return hexString;
};
