/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let pick = Math.floor(Math.random() * n) + 1;

  let result = guess(pick);

  while (result !== 0) {
    if (result === -1) {
      result = guess(pick - 1);
    }
    if (result === 1) {
      result = guess(pick + 1);
    }
  }

  return result;
};
