/**
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

Given a positive integer n, return the nth element of the count-and-say sequence.

Example 1:
Input: n = 4

Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"

Example 2:
Input: n = 1

Output: "1"
Explanation:
This is the base case.

* @param {number} n
* @return {string}
*/
// var countAndSay = function (n) {
//   const mapper = (num) => {
//     let map = new Map();
//     for (let i = 0; i < num.length; i++) {
//       map.set(num[i], map.get(num[i]) ? map.get(num[i]) + 1 : 0);
//     }
//     return mapper;
//   };
// };

const digitFrequencyMapper = (num) => {
  let result = [];
  let count = 1;

  for (let i = 0; i < num.length; i++) {
    // If next digit is the same, increment the count
    if (num[i] === num[i + 1]) {
      count++;
    } else {
      // Push the digit and its frequency as a pair
      result.push([parseInt(num[i]), count]);
      // Reset count for the next digit
      count = 1;
    }
  }

  return result;
};

const concatenate = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    let substr = arr[i][1].toString() + arr[i][0].toString();
    str += substr;
  }

  return str;
};
console.log(digitFrequencyMapper("223314444411"));
console.log(
  concatenate([
    [2, 2],
    [3, 2],
    [1, 1],
    [4, 5],
    [1, 2],
  ])
);
