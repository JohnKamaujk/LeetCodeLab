/**
We can scramble a string s to get a string t using the following algorithm:

If the length of the string is 1, stop.
If the length of the string is > 1, do the following:
Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
Apply step 1 recursively on each of the two substrings x and y.
Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

Example 1:
Input: s1 = "great", s2 = "rgeat"
Output: true
Explanation: One possible scenario applied on s1 is:
"great" --> "gr/eat" // divide at random index.
"gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
"gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at random index each of them.
"g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
"r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
"r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is "rgeat" which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.

Example 2:
Input: s1 = "abcde", s2 = "caebd"
Output: false

Example 3:
Input: s1 = "a", s2 = "a"
Output: true

* @param {string} s1
* @param {string} s2
* @return {boolean}
*/
var isScramble = function (s1, s2) {
  function checkScramble(s1, start1, end1, s2, start2, end2, memo = {}) {
    const length = end1 - start1;

    // Generate a unique key for memoization using indices of substrings
    const key = 1e9 * start1 + 1e6 * end1 + 1e3 * start2 + 1 * end2;

    // If this key is already in memo, return the cached result
    if (key in memo) {
      return memo[key];
    }

    let charCodeSum = 0;

    // Check if the character frequencies match between the two substrings
    for (let i = 0; i < length; i++) {
      charCodeSum +=
        s1.charCodeAt(start1 + i) ** 2 - s2.charCodeAt(start2 + i) ** 2;
    }

    if (charCodeSum !== 0) {
      return (memo[key] = false);
    }

    // Base case: when the length of the substrings is 1, they are scrambled if they match
    if (length === 1) {
      return (memo[key] = s1[start1] === s2[start2]);
    }

    // Try splitting the substring at every possible position
    for (let i = 1; i < length; i++) {
      // Case 1: Substrings are not swapped
      if (
        checkScramble(s1, start1, start1 + i, s2, start2, start2 + i, memo) &&
        checkScramble(s1, start1 + i, end1, s2, start2 + i, end2, memo)
      ) {
        return (memo[key] = true);
      }

      // Case 2: Substrings are swapped
      if (
        checkScramble(s1, start1, start1 + i, s2, end2 - i, end2, memo) &&
        checkScramble(s1, start1 + i, end1, s2, start2, end2 - i, memo)
      ) {
        return (memo[key] = true);
      }
    }

    // If no valid scramble found, cache the result as false
    return (memo[key] = false);
  }

  return checkScramble(s1, 0, s1.length, s2, 0, s2.length);
};
