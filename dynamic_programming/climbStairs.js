/**
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  let a = 3,
    b = 2;
  for (let i = 0; i < n - 3; i++) {
    a = a + b;
    b = a - b;
  }
  return a;
};

