/**
You are given two positive integers n and limit.

Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.

Example 1:
Input: n = 5, limit = 2
Output: 3
Explanation: There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).

Example 2:
Input: n = 3, limit = 3
Output: 10
Explanation: There are 10 ways to distribute 3 candies such that no child gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0).
 
Constraints:
1 <= n <= 106
1 <= limit <= 106

* @param {number} n
* @param {number} limit
* @return {number}
*/
var distributeCandies = function (n, limit) {
  // Helper function to compute combinations of 2 from n
  const combinationsOfTwo = (num) => (num * (num - 1)) / 2;

  // If the number of candies is more than three times the limit
  // it's not possible to distribute the candies fairly, so return 0
  if (n > 3 * limit) {
    return 0;
  }

  // Calculate basic combination count for candies + 2
  let answer = combinationsOfTwo(n + 2);

  // If there are more candies than the limit, adjust the number
  // of combinations by subtracting impossible distributions
  if (n > limit) {
    answer -= 3 * combinationsOfTwo(n - limit + 1);
  }

  // If the number of candies minus 2 is at least double the limit,
  // adjust the number of combinations by adding back some distributions
  if (n - 2 >= 2 * limit) {
    answer += 3 * combinationsOfTwo(n - 2 * limit);
  }

  return answer;
};
