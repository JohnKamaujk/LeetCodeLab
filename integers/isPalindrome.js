/*Given an integer x, return true if x is a palindrome, and false otherwise.

Follow up: Could you solve it without converting the integer to a string 

* @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let number = x;

  let reverseNumber = 0;

  while (number > 0) {
    reverseNumber = reverseNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return x === reverseNumber;
};
