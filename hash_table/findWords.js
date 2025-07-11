/**
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Explanation:
Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase).

* @param {string[]} words
* @return {string[]}
*/
var findWords = function (words) {
  let result = [];

  let rows = [
    new Set("qwertyuiop".split("")),
    new Set("asdfghjkl".split("")),
    new Set("zxcvbnm".split("")),
  ];

  for (let word of words) {
    let lowerWord = word.toLowerCase();
    let rowIndex = -1;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].has(lowerWord[0])) {
        rowIndex = i;
        break;
      }
    }

    if (rowIndex === -1) continue;

    let canBeTyped = true;
    for (let char of lowerWord) {
      if (!rows[rowIndex].has(char)) {
        canBeTyped = false;
        break;
      }
    }

    if (canBeTyped) {
      result.push(word);
    }
  }
  return result;
};
