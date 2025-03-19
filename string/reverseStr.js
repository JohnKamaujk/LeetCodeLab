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
  let strArr = s.split("");
  const k2 = 2 * k;

  for (let i = 0; i < strArr.length - 1; i += k2) {
    swap(i, Math.min(i + k - 1, arr.length - 1));
  }

  const swap = (end, start) => {
    while (start < end) {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
      start++;
      end--;
    }
  };

  return strArr.join("");
};


var reverseStr = function (s, k, arr = s.split(""), k2 = k * 2) {
  for (let i = 0; i < arr.length - 1; i += k2) {
    swap(i, Math.min(i + k - 1, arr.length - 1));
  }
  return arr.join("");

  function swap(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
};

