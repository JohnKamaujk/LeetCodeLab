/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
 
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1 || numRows >= s.length) return s;

  let idx = 0;
  let d = 1;
  let rows = [];

  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  for (const char of s) {
    rows[idx].push(char);
    if (idx === 0) {
      d = 1;
    } else if (idx === numRows - 1) {
      d = -1;
    }
    idx += d;
  }

  const result = rows.map((subArray) => subArray.join("")).join("");

  return result;
};
