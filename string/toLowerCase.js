/**
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter. 
Example 1:
Input: s = "Hello"
Output: "hello"

Example 2:
Input: s = "here"
Output: "here"

Example 3:
Input: s = "LOVELY"
Output: "lovely"

* @param {string} s
* @return {string}
*/
var toLowerCase = function (s) {
  let low = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 122) {
      s.charCodeAt(i) <= 90
        ? (low += String.fromCharCode(s.charCodeAt(i) + 32))
        : (low += s[i]);
    } else {
      low += s[i];
    }
  }
  return low;
};
