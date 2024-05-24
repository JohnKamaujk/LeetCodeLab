/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];

  const backtrack = (str, open, close) => {
    if (open + close === n * 2) {
      stack.push(str);
    }

    if (open < n) backtrack(str + "(", open + 1, close);
    if (close < open) backtrack(str + ")", open, close + 1);
  };

  backtrack("", 0, 0);

  return stack;
};
