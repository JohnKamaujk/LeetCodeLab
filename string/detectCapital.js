/**
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false

* @param {string} word
* @return {boolean}
*/
var detectCapitalUse = function (word) {
  let wordLetters = word.split("");
  return (
    wordLetters.every((letter) => letter.toUpperCase() == letter) ||
    wordLetters.every((letter) => letter.toLowerCase() == letter) ||
    (wordLetters[0] == wordLetters[0].toUpperCase() &&
      wordLetters.slice(1).every((letter) => letter.toLowerCase() == letter))
  );
};
