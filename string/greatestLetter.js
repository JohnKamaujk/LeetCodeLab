/**
 Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

An English letter b is greater than another letter a if b appears after a in the English alphabet.

Example 1:
Input: s = "lEeTcOdE"
Output: "E"
Explanation:
The letter 'E' is the only letter to appear in both lower and upper case.

Example 2:
Input: s = "arRAzFif"
Output: "R"
Explanation:
The letter 'R' is the greatest letter to appear in both lower and upper case.
Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

Example 3:
Input: s = "AbCdEfGhIjK"
Output: ""
Explanation:
There is no letter that appears in both lower and upper case.

* @param {string} s
* @return {string}
*/
var greatestLetter = function (s) {
  let array = [];

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let otherCode;

    if (charCode < 97) {
      otherCode = charCode + 32;
    } else {
      otherCode = charCode - 32;
    }

    if (s.includes(String.fromCharCode(otherCode))) {
      if (otherCode <= 90) {
        array.push(otherCode);
      } else {
        array.push(charCode);
      }
    }
  }
  array.sort((a, b) => b - a);
  if (array.length === 0) {
    return "";
  } else {
    return String.fromCharCode(array[0]);
  }
};

console.log(greatestLetter("lEeTcOdE"));
