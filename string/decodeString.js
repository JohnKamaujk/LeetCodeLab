/**
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].

* @param {string} s
* @return {string}
*/
var decodeString = function (s) {
  function stringToInteger(str) {
    let ans = 0;
    for (let ch of str) {
      ans *= 10;
      ans += parseInt(ch);
    }
    return ans;
  }

  function decode(s) {
    let ans = "";
    let prev = 0;
    let repetitions = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
      if (depth === 0 && s[i] >= "a" && s[i] <= "z") {
        ans += s[i];
        prev = i + 1;
      }

      if (s[i] === "[") {
        depth++;
        if (depth === 1) {
          repetitions = stringToInteger(s.slice(prev, i));
          prev = i + 1;
        }
      } else if (s[i] === "]") {
        depth--;
        if (depth === 0) {
          while (repetitions > 0) {
            ans += decode(s.slice(prev, i));
            repetitions--;
          }
          prev = i + 1;
        }
      }
    }

    return ans;
  }

  return decode(s);
};

