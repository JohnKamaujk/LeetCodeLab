/**
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]

* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function (rowIndex) {
  let result = [];
  for (let i = 0; i <= rowIndex; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
  return result[rowIndex]
};
