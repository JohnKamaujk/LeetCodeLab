// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") return "0";

  let arr = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let multiply = num1.charAt(i) * num2.charAt(j) + arr[i + j + 1];
      arr[i + j + 1] = multiply % 10;
      arr[i + j] += Math.floor(multiply / 10);
    }
  }
  if (arr[0] == 0) arr.shift();

  return arr.join("");
};
