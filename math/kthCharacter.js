/**
Alice and Bob are playing a game. Initially, Alice has a string word = "a".

You are given a positive integer k.

Now Bob will ask Alice to perform the following operation forever:

Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

Note that the character 'z' can be changed to 'a' in the operation.

Example 1:
Input: k = 5

Output: "b"

Explanation:
Initially, word = "a". We need to do the operation three times:
Generated string is "b", word becomes "ab".
Generated string is "bc", word becomes "abbc".
Generated string is "bccd", word becomes "abbcbccd".

Example 2:
Input: k = 10

Output: "c"

* @param {number} k
* @return {character}

/** Brute force solution
var kthCharacter = function (k) {
  const alphabets = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  let string = "a";

  while (string.length <= k) {
    let str_arr = string.split("");
    for (let i = 0; i < str_arr.length; i++) {
      let index = alphabets.indexOf(str_arr[i]);
      let char;
      if (index === 25) {
        char = alphabets[0];
      } else {
        char = alphabets[index + 1];
      }
      string += char;
    }
  }

  return string.charAt(k - 1);
};
*/

var kthCharacter = function (k) {
  let flips = 0; // Variable to count the number of flips (set bits in binary representation)
  let num = k - 1; // We use k-1 because we are counting flips from 0 up to k-1

  // Loop to count how many set bits (1s) are in the binary representation of num
  while (num > 0) {
    flips += num & 1; // Increment flips if the least significant bit is 1
    num = num >> 1; // Shift right to process the next bit
  }

  // The number of flips determines how far we move in the alphabet from 'a'
  // For 0 flips, it's 'a', 1 flip is 'b', and so on
  return String.fromCharCode("a".charCodeAt(0) + flips); // Return the character based on the number of flips
};
