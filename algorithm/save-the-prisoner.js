/**
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 * 
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n - the number of prisoners
 *  2. INTEGER m - the number of sweets
 *  3. INTEGER s - the chair number to start passing out treats at
 */

function saveThePrisoner(n, m, s) {
    // Write your code here
    const r = (s + (m - 1)) % n;
    return r === 0 ? n : r
}

// Drive Code
console.log(saveThePrisoner(4, 6, 2)); // output: 3
console.log(saveThePrisoner(5, 2, 1)); // output: 2
console.log(saveThePrisoner(5, 2, 2)); // output: 3
console.log(saveThePrisoner(7, 19, 2)); // output: 6
console.log(saveThePrisoner(3, 7, 3)); // output: 3
console.log(saveThePrisoner(46934, 543563655, 46743)); // output: 20809
console.log(saveThePrisoner(530, 533048047, 529)); // output: 15