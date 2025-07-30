/**
A fancy string is a string where no three consecutive characters are equal.
Given a string s, delete the minimum possible number of characters from s to make it fancy.
Return the final string after the deletion. It can be shown that the answer will always be unique.

Example 1:
Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".

Example 2:
Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".

Example 3:
Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab".
 
Constraints:1 <= s.length <= 105
s consists only of lowercase English letters.

* @param {string} s
* @return {string}
*/
var makeFancyString = function (s) {
  let n = s.length;
  if (n <= 2) return s;

  const res = [s[0], s[1]];

  for (let i = 2; i < n; i++) {
    const len = res.length;
    const ch = s[i];
    if (res[len - 1] === ch && res[len - 2] === ch) {
      continue; // we skip adding the third consecutive character
    }
    res.push(ch);
  }
  return res.join("");
};
