// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const counter = new Array(26).fill(0);
  //incrementing
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 97]++;
  }
  //Decrementing
  for (let j = 0; j < t.length; j++) {
    counter[t.charCodeAt(j) - 97]--;
  }
  //All have to be zero if its anagram
  return counter.every((v) => v == 0);
};
