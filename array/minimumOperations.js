/**
You are given a m x n matrix grid consisting of non-negative integers.
In one operation, you can increment the value of any grid[i][j] by 1.
Return the minimum number of operations needed to make all columns of grid strictly increasing.
 
Example 1:
Input: grid = [[3,2],[1,3],[3,4],[0,1]]
Output: 15

Explanation:
To make the 0th column strictly increasing, we can apply 3 operations on grid[1][0], 2 operations on grid[2][0], and 6 operations on grid[3][0].
To make the 1st column strictly increasing, we can apply 4 operations on grid[3][1].

Example 2:
Input: grid = [[3,2,1],[2,1,0],[1,2,3]]
Output: 12

Explanation:
To make the 0th column strictly increasing, we can apply 2 operations on grid[1][0], and 4 operations on grid[2][0].
To make the 1st column strictly increasing, we can apply 2 operations on grid[1][1], and 2 operations on grid[2][1].
To make the 2nd column strictly increasing, we can apply 2 operations on grid[1][2].

* @param {number[][]} grid
* @return {number}
*/
var minimumOperations = function (grid) {
    const m = grid.length,
      n = grid[0].length;
    let res = 0;
    for (let j = 0; j < n; j++) {
      for (let i = 1; i < m; i++) {
        if (grid[i][j] <= grid[i - 1][j]) {
          res += grid[i - 1][j] - grid[i][j] + 1;
          grid[i][j] = grid[i - 1][j] + 1;
        }
      }
    }
    return res;
};
