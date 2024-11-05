// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return i;
    }
  }
  return -1;
};

