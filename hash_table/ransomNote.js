/**
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

* @param {string} ransomNote
* @param {string} magazine
* @return {boolean}
*/
var canConstruct = function (ransomNote, magazine) {
  const freq = new Map();

  for (const char of ransomNote) {
    if (freq.has(char)) {
      freq.set(char, freq.get(char) + 1);
    } else {
      freq.set(char, 1);
    }
  }

  for (const char of magazine) {
    if (freq.has(char)) {
      freq.set(char, freq.get(char) - 1);
    }
  }
  for (const [key, value] of freq.entries()) {
    if (value > 0) {
      return false;
    }
  }

  return true;
};
