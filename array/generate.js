/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let row = 0; row < numRows; row++) {
    const newRow = new Array(row + 1).fill(1); // Start with 1's

    for (let col = 1; col < row; col++) {
      // Only fill middle elements
      newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
    }

    triangle.push(newRow);
  }

  return triangle;
};