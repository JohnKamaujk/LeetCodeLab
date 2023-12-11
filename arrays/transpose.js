/**
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  // Create transpose Matrix
  const output = new Array(col).fill(0).map(() => new Array(row).fill(0));
  // Insert in Transpose Matrix
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ans[j][i] = matrix[i][j];
    }
  }

  return output;
};
