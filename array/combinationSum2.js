/**
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[[1,1,6],[1,2,5],[1,7],[2,6]]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[[1,2,2],[5]]

* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
/**
 * Finds all unique combinations of numbers that sum up to the target.
 * Each number in candidates can be used only once.
 *
 * @param {number[]} candidates - The array of numbers (can include duplicates).
 * @param {number} target - The sum we need to reach.
 * @return {number[][]} - A list of unique combinations.
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b); // Sort to handle duplicates efficiently
  findCombinations(result, [], candidates, target, 0);
  return result;
};

/**
 * Helper function to perform backtracking.
 *
 * @param {number[][]} result - Stores all unique combinations.
 * @param {number[]} tempList - Tracks the current combination being built.
 * @param {number[]} candidates - The sorted list of numbers.
 * @param {number} totalLeft - Remaining sum needed to reach the target.
 * @param {number} startIndex - The current position in the array.
 */
function findCombinations(result, tempList, candidates, totalLeft, startIndex) {
  if (totalLeft === 0) {
    result.push([...tempList]); // Found a valid combination
    return;
  }

  for (let i = startIndex; i < candidates.length; i++) {
    // Skip duplicate elements to avoid duplicate combinations
    if (i > startIndex && candidates[i] === candidates[i - 1]) continue;

    if (candidates[i] > totalLeft) break; // Optimization: No need to check further

    tempList.push(candidates[i]); // Include current number
    findCombinations(
      result,
      tempList,
      candidates,
      totalLeft - candidates[i],
      i + 1
    );
    tempList.pop(); // Backtrack to explore other possibilities
  }
}
