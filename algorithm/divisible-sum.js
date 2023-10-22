/**
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 * 
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    return ar.reduce((cnt, cv, ci) => { 
        ar.slice(ci + 1).forEach((nv) => {
            if ((cv + nv) % k === 0) cnt++;
        })
        return cnt;
    }, 0);
}

// Drive code;
console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 6])); // Output: 3
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // Output: 5