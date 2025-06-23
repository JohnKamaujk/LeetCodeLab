/**
You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
Return the lexicographically smallest string that can be written on the paper.

Example 1:
Input: s = "zza"
Output: "azz"
Explanation: Let p denote the written string.
Initially p="", s="zza", t="".
Perform first operation three times p="", s="", t="zza".
Perform second operation three times p="azz", s="", t="".

Example 2:
Input: s = "bac"
Output: "abc"
Explanation: Let p denote the written string.
Perform first operation twice p="", s="c", t="ba". 
Perform second operation twice p="ab", s="c", t="". 
Perform first operation p="ab", s="", t="c". 
Perform second operation p="abc", s="", t="".

Example 3:
Input: s = "bdda"
Output: "addb"
Explanation: Let p denote the written string.
Initially p="", s="bdda", t="".
Perform first operation four times p="", s="", t="bdda".
Perform second operation four times p="addb", s="", t="".
 
Constraints:
1 <= s.length <= 105
s consists of only English lowercase letters.

* @param {string} s
* @return {string}
*/
var robotWithString = function (s) {
    let characterCount = new Array(128).fill(0);

    // Counting occurrences of each character in the string
    for (let character of s) {
      characterCount[character.charCodeAt(0)] += 1;
    }

    // Initialize with the charCode of 'a', intending to find the smallest lexicographical character
    let minCharCodeIndex = "a".charCodeAt(0);

    let resultArray = [];

    // Use a stack to keep track of characters processed
    let charStack = [];

    for (let character of s) {
      // Decrease the count for this character as it is being processed
      characterCount[character.charCodeAt(0)] -= 1;

      // Find the next character that still has occurrences left
      while (
        minCharCodeIndex <= "z".charCodeAt(0) &&
        characterCount[minCharCodeIndex] == 0
      ) {
        minCharCodeIndex += 1;
      }

      // Push the current character onto the stack
      charStack.push(character);

      // As long as the stack is not empty and the last character on the stack is less
      // or equal to the current minimum, add it to the result array
      while (
        charStack.length > 0 &&
        charStack[charStack.length - 1].charCodeAt(0) <= minCharCodeIndex
      ) {
        resultArray.push(charStack.pop());
      }
    }

    return resultArray.join("");
};
