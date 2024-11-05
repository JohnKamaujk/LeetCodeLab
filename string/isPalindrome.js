// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      arr1.push(s[i].toLowerCase());
    }
    if ((s[i] >= "0" && s[i] <= "9") || (s[i] >= "a" && s[i] <= "z")) {
      arr1.push(s[i]);
    }
  }
  arr2 = [...arr1];
  arr2.reverse();
  return arr1.join("") === arr2.join("");
};

