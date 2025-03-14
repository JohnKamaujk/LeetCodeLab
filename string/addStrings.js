/**
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"

* @param {string} num1
* @param {string} num2
* @return {string}
*/
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;

  let sum = [];
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    let firstNum = num1[i] || 0;
    let secondNum = num2[j] || 0;
    let total = parseInt(firstNum) + parseInt(secondNum) + carry;
    let remainder = total % 10;
    sum.push(remainder);
    carry = total >= 10 ? 1 : 0;
    j--;
    i--;
  }
  return sum.reverse().join("");
};

console.log(addStrings("123", "11"));
