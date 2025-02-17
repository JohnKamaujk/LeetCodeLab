/**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12

* @param {number[][]} grid
* @return {number}
*/
var minPathSum = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0; // Handle empty grid edge case

  let rows = grid.length,
    cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue; // Skip the starting cell

      let fromLeft = col > 0 ? grid[row][col - 1] : Infinity; // Value from the left cell
      let fromTop = row > 0 ? grid[row - 1][col] : Infinity; // Value from the top cell

      grid[row][col] += Math.min(fromLeft, fromTop); // Update the cell with the minimum path sum
    }
  }

  return grid[rows - 1][cols - 1]; // Return the bottom-right cell value (min path sum)
};
