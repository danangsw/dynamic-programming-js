/**
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 * 
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill - cost of each item
 *  2. INTEGER k - zero based index
 *  3. INTEGER b - amount od contributed bill
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    const rest = bill.reduce((pv, cv, ci) => {
        return pv -= ((ci === k) ? 0 : (cv/2)); 
    }, b);
    
    return rest === 0 ? 'Bon Appetit' : rest;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)); // Output 5
console.log(bonAppetit([3, 10, 2, 9], 1, 7)); // Output Bon Appetit