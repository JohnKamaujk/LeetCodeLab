// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  } else {
    let revNum = 0;
    let sign = 1;

    if (x < 0) {
      x = Math.abs(x);
      sign = -1;
    }
    while (x != 0) {
      revNum = revNum * 10 + (x % 10);
      x = Math.trunc(x / 10);
    }
    if (revNum > 2147483648 || revNum < -2147483648) {
      return 0;
    }
    return revNum * sign;
  }
};

