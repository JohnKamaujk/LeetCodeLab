/*Given a string s, return the longest 
palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
  if (s.length === 0) return "";

  // Initialize variables to store the indices of the longest palindrome found
  let longestPalindromeIndices = [0, 0];

  for (let i = 0; i < s.length; ++i) {
    // Find the indices of the longest palindrome centered at character i
    let currentIndices = expandAroundCenter(s, i, i);

    // Compare the length of the current palindrome with the longest found so far
    if (
      currentIndices[1] - currentIndices[0] >
      longestPalindromeIndices[1] - longestPalindromeIndices[0]
    ) {
      // Update the longest palindrome indices if the current one is longer
      longestPalindromeIndices = currentIndices;
    }

    // Check if there is a possibility of an even-length palindrome centered at
    // character i and i+1
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      // Find the indices of the longest even-length palindrome centered at characters
      // i and i+1
      let evenIndices = expandAroundCenter(s, i, i + 1);

      // Compare the length of the even-length palindrome with the longest found so
      // far
      if (
        evenIndices[1] - evenIndices[0] >
        longestPalindromeIndices[1] - longestPalindromeIndices[0]
      ) {
        // Update the longest palindrome indices if the even-length one is longer
        longestPalindromeIndices = evenIndices;
      }
    }
  }

  // Extract and return the longest palindrome substring using the indices
  return s.slice(longestPalindromeIndices[0], longestPalindromeIndices[1] + 1);
};

// Helper function to find and return the indices of the longest palindrome
// extended from s[i..j] (inclusive) by expanding around the center
function expandAroundCenter(s, i, j) {
  // Expand the palindrome by moving outward from the center while the characters match
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--; // Move the left index to the left
    j++; // Move the right index to the right
  }
  // Return the indices of the longest palindrome found
  return [i + 1, j - 1];
};
