/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  let shortestStr = strs[0];
  let shortestStrLength = strs[0].length;
  for (const str of strs) {
    if (str.length < shortestStrLength) {
      shortestStr = str;
    }
  }

  let substring = "";

  for (let i = 0; i < shortestStr.length; i++) {
    if (strs.every((str) => str[i] === shortestStr[i])) {
      substring += shortestStr[i];
    } else {
      break;
    }
  }

  return substring;
};

