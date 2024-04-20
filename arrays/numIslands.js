/**Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  let islands = 0;
  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = 0; //mark land as checked
    dfs(r - 1, c); // check top of cell
    dfs(r + 1, c); // check bottom of cell
    dfs(r, c + 1); // check right of cell
    dfs(r, c - 1); // check left of cell
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] == "1") {
        dfs(r, c);
        islands++;
      }
    }
  }
  return islands;
};
