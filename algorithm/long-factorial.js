// console.log(Number.MAX_VALUE, Number.MAX_SAFE_INTEGER)

/**
 * https://www.hackerrank.com/challenges/extra-long-factorials/problem
 * 
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    return recFactorial(n).toString();
}

function recFactorial(item) {
    if (item < 2) return item;
    return recFactorial(BigInt(item) - BigInt(1)) * BigInt(item);
}

function simpleFactorial(item) { 
    let res = BigInt(1);
    for (let i = 1; i <= item; i++) { 
        res = res * BigInt(i);
    }

    return res.toString();
}

console.log(extraLongFactorials(25));