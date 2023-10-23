/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 * 
 */

// Complete the jumpingOnClouds function below.
/**
 * @param {*} c clouds array int
 * @param {*} k jump power int
 */
function jumpingOnClouds(c, k) {
    let str = 100;
    let idx = 0;
    do {
        idx = (idx + k) % c.length;
        str -= (c[idx] === 0) ? 1 : 3;
    } while (idx !== 0)
    return str;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)); // output: 92
console.log(jumpingOnClouds([0, 0, 1, 0], 2)); // output: 96
console.log(jumpingOnClouds([0, 0], 1)); // output: 98
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 1)); // output: 80