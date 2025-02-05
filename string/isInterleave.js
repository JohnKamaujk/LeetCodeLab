/**
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

Example 1:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Explanation: One way to obtain s3 is:
Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
Since s3 can be obtained by interleaving s1 and s2, we return true.

Example 2:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.

Example 3:
Input: s1 = "", s2 = "", s3 = ""
Output: true

* @param {string} s1
* @param {string} s2
* @param {string} s3
* @return {boolean}
*/
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  const p = s3.length;

  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(-1));

  const interleave = (i, j, k) => {
    if (k === p) {
      return i === m && j === n;
    }
    if (dp[i][j] !== -1) return dp[i][j];
    let res = false;
    if (i < m && s1[i] === s3[k]) {
      res = interleave(i + 1, j, k + 1);
    }
    if (!res && j < n && s2[j] === s3[k]) {
      res = interleave(i, j + 1, k + 1);
    }
    return (dp[i][j] = res);
  };

  return interleave(0, 0, 0);
};
