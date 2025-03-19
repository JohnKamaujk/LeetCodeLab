/**
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
 
Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"

* @param {string} s
* @param {number} k
* @return {string}
*/
var reverseStr = function (s, k) {
  let arr = s.split(""); // Convert string to array for easy manipulation
  let n = arr.length; // Get the length of the string

  for (let i = 0; i < n; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, n - 1); // Ensure end doesn't exceed array length

    // Reverse only the first k characters in this 2k block
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  return arr.join(""); // Convert array back to string
};