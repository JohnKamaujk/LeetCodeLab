/**
In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
 
Example 1:
Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
[5,8,7],
[0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.

Example 2:
Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
[2,0,6],
[3,4,5],
[0,3,0],
[9,0,20]]

* @param {number[][]} grid
* @return {number}
*/
var getMaximumGold = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let maxGold = 0;

  const dfsBacktrack = (i, j, currentGold) => {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == 0) {
      return 0;
    } //out of bound conditions

    const goldInCurrentCell = grid[i][j];
    currentGold += goldInCurrentCell;

    //mark Visited
    grid[i][j] = 0;

    //update Max Gold
    maxGold = Math.max(maxGold, currentGold);

    //traverse all cells
    dfsBacktrack(i + 1, j, currentGold);
    dfsBacktrack(i - 1, j, currentGold);
    dfsBacktrack(i, j + 1, currentGold);
    dfsBacktrack(i, j - 1, currentGold);

    //backtrack
    grid[i][j] = goldInCurrentCell;
  };

  //main
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== 0) {
        dfsBacktrack(i, j, 0);
      }
    }
  }

  return maxGold;
};
