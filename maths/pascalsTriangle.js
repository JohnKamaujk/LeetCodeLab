/**
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  let rowArray = [];
  for (let i = 0; i < numRows; i++) {
    rowArray.push([]);
    for (let j = 0; j < i + 1; j++)
      if (j == 0 || j == i) rowArray[i].push(1);
      else rowArray[i].push(rowArray[i - 1][j - 1] + rowArray[i - 1][j]);
  }
  return rowArray;
};
