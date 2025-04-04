/**
Given a string s containing only digits, return the lexicographically smallest string that can be obtained after swapping adjacent digits in s with the same parity at most once.

Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

Example 1:
Input: s = "45320"

Output: "43520"

Explanation:
s[1] == '5' and s[2] == '3' both have the same parity, and swapping them results in the lexicographically smallest string.

Example 2:
Input: s = "001"

Output: "001"

Explanation:
There is no need to perform a swap because s is already the lexicographically smallest.

* @param {string} s
* @return {string}
*/
var getSmallestString = function (s) {
  const arr = s.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && arr[i] % 2 === arr[i + 1] % 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      return arr.join("");
    }
  }
  return s;
};
