// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// strings=['ab','ab','abc']
//queries=['ab','abc','bc']

// There are 2 instances of 'ab',  1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results [2,1,0].

/**
 * @param {string[]} strings
 * @param {string[]} queries
 * @return {number[]}
 */

function matchingStrings(strings, queries) {
  let result = [];
  let count = 0;
  for (let query of queries) {
    count = 0;
    for (let string of strings) {
      if (query === string) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

function hasPairWithSum(nums, target) {
    let left = 0;             // Pointer starting from the beginning
    let right = nums.length - 1; // Pointer starting from the end
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === target) {
            return true; // Pair found, return true
        } else if (sum < target) {
            left++; // Move the left pointer to increase the sum
        } else {
            right--; // Move the right pointer to decrease the sum
        }
    }
    
    return false; // No pair found, return false
}

const nums = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 56;

const result = hasPairWithSum(nums, target);
console.log(result); // Output: true (4 + 9 = 13)tput: true (4 + 9 = 13)
