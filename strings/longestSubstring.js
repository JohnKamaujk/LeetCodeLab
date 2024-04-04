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
  let result = 0;
  const hashMap = {};
  let i = 0;
  let j = 0;
  while (j < s.length) {
    let char = s[j];
    // If a duplicate is found, update i to our stored next valid position
    if (hashMap.hasOwnProperty(char)) {
      i = Math.max(hashMap[char], i);
    }
    result = Math.max(result, j - i + 1);
    // Store the next index for this character, as this will be the next valid position to de-duplicate
    hashMap[char] = j + 1;
  }
  return result;
};
