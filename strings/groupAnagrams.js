/*
Given an array of strings strs, group the 
anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function (strs) {
  const sortStr = (str) => str.split("").sort().join("");

  let hashMap = new Map();

  for (const str of strs) {
    let sortedStr = sortStr(str);
    if (!hashMap[sortedStr]) {
      hashMap[sortedStr] = [];
    }
    hashMap[sortedStr].push(str);
  }

  return Object.values(hashMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
