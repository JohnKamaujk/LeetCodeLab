/**Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

* @param {string} s
* @return {number}
*/
var lengthOfLongestSubstring = function (s) {
  let charMap = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // If current character has been seen in the current substring
    if (charMap[char] >= start) {
      // Move the start of the substring after the last occurrence of the current character
      start = charMap[char] + 1;
    }

    charMap[char] = i; // Update the last index of the current character
    maxLength = Math.max(maxLength, i - start + 1); // Calculate the length of the current substring and update maxLength if needed
  }

  return maxLength;
};
