/**
 * https://www.hackerrank.com/challenges/between-two-sets/problem
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let totalX = 0;

    let gcdB = b[0];
    for (let i = 1; i < b.length; i++) {
        gcdB = gcd(gcdB, b[i]);
    }
    console.log({gcdB})
    let lcmA = a[0];
    for (let i = 1; i < a.length; i++) { 
        lcmA = lcm(lcmA, a[i]);
    }
    console.log({lcmA})
    for (let i = lcmA; i <= gcdB; i+=lcmA) {
        if (gcdB % i == 0) totalX++;
    }

    console.log({ totalX });

    return totalX;
}

/**
 * Greatest Common Divisor (GCD): 
 * The GCD of two numbers is defined as the largest integer that divides both integers without any remainder.
 * How calculate
 * 1. If b is 0, it returns a. Otherwise, it recursively calls itself with b and a % b.
 */
function gcd(a, b) { 
    console.log({a, b})
    if (b === 0) return a;

    return gcd(b, a % b);
}

/**
 * Least Common Multiple (LCM): 
 * The LCM of two numbers is defined as the smallest integer which is a multiple of both integers
 */
function lcm(a, b) { 
    console.log({a, b})
    return (a * b) / gcd(a, b);
 }

// Drive Code
let a = [2,6];
let b = [16, 32, 96];

console.log(getTotalX([2, 4], [24, 36]));
console.log(getTotalX([2,4], [16, 32, 96]));