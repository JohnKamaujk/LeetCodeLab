/**
 * You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

Return the minimum number of extra characters left over if you break up s optimally.

Example 1:
Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
Output: 1
Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

Example 2:
Input: s = "sayhelloworld", dictionary = ["hello","world"]
Output: 3
Explanation: We can break s in two substrings: "hello" from index 3 to 7 and "world" from index 8 to 12. The characters at indices 0, 1, 2 are not used in any substring and thus are considered as extra characters. Hence, we return 3.

* @param {string} s
* @param {string[]} dictionary
* @return {number}
*/
var minExtraChar = function (s, dictionary) {
  const dp = [0];
  for (let i = 1; i <= s.length; i++) {
    dp.push(dp[i - 1] + 1);
    for (const word of dictionary) {
      if (i >= word.length && s.slice(i - word.length, i) == word) {
        dp[i] = Math.min(dp[i], dp[i - word.length]);
      }
    }
  }
  return dp[s.length];
};
