/**
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Example 1:
Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

Example 2:
Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
Output: 3
 
Constraints:
1 <= dominoes.length <= 4 * 104
dominoes[i].length == 2
1 <= dominoes[i][j] <= 9

* @param {number[][]} dominoes
* @return {number}
*/
var numEquivDominoPairs = function (dominoes) {
  let map = new Map();
  let count = 0;

  for (let [a, b] of dominoes) {
    let key = a < b ? `${a},${b}` : `${b},${a}`;
    let val = map.get(key) || 0;
    count += val;
    map.set(key, val + 1);
  }

  return count;
};
