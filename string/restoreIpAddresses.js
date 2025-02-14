/**
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.


Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

* @param {string} s
* @return {string[]}
*/
var restoreIpAddresses = function (s) {
  let ans = [];
  // if length is greater than 12 that means str cannot be divided in 4 part
  // if length is less than 4 means not able to generate 4 parts
  if (s.length > 12 || s.length < 4) return [];

  function backtrack(start, substrings) {
    // we have 4 parts of string
    if (substrings.length == 4) {
      let strAddress = [...substrings].join(".");
      // strAddress is of length s + 3(dot) & comparing it with s.length + 3 dots
      // also means that we have reached the end of string & considered all numbers from string s
      if (strAddress.length == s.length + 3) {
        ans.push(strAddress);
        return;
      }
    }
    // i = start becoz we have to move to nect index every time
    for (let i = start; i < s.length; i++) {
      let temp = s.substring(start, i + 1);
      // temp should be less than 255
      if (Number(temp) <= 255) {
        // temp[0] ==0 means that any part of ip cannot have leading zero
        // & if so we will not consider that as valid part & move to next index
        if (temp[0] == 0 && temp.length >= 2) continue;
        backtrack(i + 1, [...substrings, temp]);
      }
    }
  }

  backtrack(0, []);
  return ans;
};
