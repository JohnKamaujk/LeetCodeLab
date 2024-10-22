// Given an integer n, return the number of prime numbers that are strictly less than n.
/**
 * @param {number} n
 * @return {number}
 */

/*
Use sieve of eratosthenes to fill an array of size n+1 with boolean values

Time complexity: O(n log(log n))
Space complexity: O(n)
*/
var countPrimes = function(n) {
    // Creating the array of booleans to track if a number is prime. 
    // Number is referenced by the index of the array
    let result = 0;
    const arr = new Array(n).fill(true);
    arr[0] = false;
    arr[1] = false;

    // sieve of eratosthenes
    for (let i = 2; i*i < n; i++) {
        if (!arr[i]) continue;
        for (let j = i*i; j<n; j+=i) {
            arr[j] = false;
        }
    }

    // count the number of boolean = true
    for (let a = 0; a < arr.length; a++) {
        if (arr[a]) result += 1;
    }
    
    return result;
};