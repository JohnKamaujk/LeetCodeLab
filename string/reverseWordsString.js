/**
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"

* @param {string} s
* @return {string}
*/
var reverseWords = function (s) {
  let wordsArray = s.split(" ");
  let output = [];

  for (let i = 0; i < wordsArray.length; i++) {
    let wordArray = wordsArray[i].split("");
    let left = 0;
    let right = wordArray.length - 1;

    while (left < right) {
      [wordArray[left], wordArray[right]] = [wordArray[right], wordArray[left]];
      left++;
      right--;
    }
    let word = wordArray.join("");
    output.push(word);
  }
  return output.join(" ");
};
