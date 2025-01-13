/**
You are given a string s and a pattern string p, where p contains exactly one '*' character.
The '*' in p can be replaced with any sequence of zero or more characters.
Return true if p can be made a 
substring of s, and false otherwise.

 
Example 1:
Input: s = "leetcode", p = "ee*e"
Output: true

Explanation:
By replacing the '*' with "tcod", the substring "eetcode" matches the pattern.

Example 2:
Input: s = "car", p = "c*v"
Output: false

Explanation:
There is no substring matching the pattern.

Example 3:
Input: s = "luck", p = "u*"
Output: true

Explanation:
The substrings "u", "uc", and "uck" match the pattern.

* @param {string} s
* @param {string} p
* @return {boolean}
*/
var hasMatch = function (s, p) {
  // Split the pattern `p` into two parts: prefix `a` and suffix `b` around `*`
  const [a, b] = p.split("*");

  // Find the first occurrence of the prefix `a` and the last occurrence of the suffix `b` in the string `s`
  const [i, j] = [s.indexOf(a), s.lastIndexOf(b)];

  // Return true if:
  // - The prefix `a` exists in `s` (i >= 0)
  // - The suffix `b` exists in `s` and its position is after the position of prefix `a` (j >= i + a.length)
  return i >= 0 && j >= i + a.length;
};