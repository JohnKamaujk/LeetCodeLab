/**
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"

Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

* @param {string} s
* @return {string}
*/
var reverseVowels = function (s) {
  const vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
  let arr = s.split("");
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
      continue;
    }

    if (!vowels.has(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};