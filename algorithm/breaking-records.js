/**
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    const result = [-1, -1]

    let max = Number.MAX_SAFE_INTEGER*-1, min = Number.MAX_SAFE_INTEGER;
    scores.forEach(element => {
        if (element > max) { 
            max = element;
            result[0]++;
        }
        if (element < min) { 
            min = element;
            result[1]++;
        }
    });

    return result;
}

// Drive code
console.log(breakingRecords([10,5,20,20,4,5,2,25,1])); // output: [2, 4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // output: [4, 0]
console.log(breakingRecords([0, 9, 3, 10, 2, 20])); // output: [3, 0]