/**
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 * 
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    // Write your code here
    const min = a.reduce((min, e, i) => {
        const j = a.findIndex((v, j) => v === e && j > i) - i;
        if (j < min && j > 0) min = j;
        return min
    }, Number.MAX_SAFE_INTEGER);

    return min === Number.MAX_SAFE_INTEGER ? -1: min;
}

// Drive code
console.log(minimumDistances([7, 1, 3, 4, 1, 7])); //. output: 3
console.log(minimumDistances([3, 2, 1, 2, 3])); //. output: 2
console.log(minimumDistances([1, 2, 3, 4, 10])); //. output: -1
