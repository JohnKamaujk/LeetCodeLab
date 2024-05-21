/**
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums) {
  const result = [];
  const n = nums.length;

  // Helper function
  const backtrack = (op, startIdx) => {
    // base case
    if (startIdx === n) {
      result.push(op.slice()); // add a copy of op to result
      return;
    }

    // recursive case
    // choice 1: include the current element
    op.push(nums[startIdx]);
    backtrack(op, startIdx + 1);

    // backtracking step
    op.pop();

    // choice 2: exclude the current element
    backtrack(op, startIdx + 1);
  };

  backtrack([], 0);
  return result;
};

console.log(subsets([1, 2]));
//[ 1, 2, 3, 5, 7, 8 ]
//remove duplicates
//start by declaring result [], push an empty array
//loop through the array, add each element , as I move
//first element then second element then combine the two before moving to third
//combining the three before moving to forth ,
//combining the four before moving to fifth
