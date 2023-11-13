/**
 * https://www.hackerrank.com/challenges/dynamic-array/problem
 * 
 * Complete the dynamicArray function below.
 * dynamicArray has the following parameters:
 * - int n: the number of empty arrays to initialize in arr
 * - string queries[q]: query strings that contain 3 space-separated integers
 * 
 * Returns 
 * - int[]: the results of each type 2 query in the order they are presented
 */

function dynamicArray(n: number, queries: number[][]): number[] {
    // Write your code here
    const arr: number[][] = [[], []];
    const res: number[] = [];
    let lastAnswer: number = 0;
    let idx: number = 0;

    for (const item of queries) {
        const q = item[0]; // Query
        const x = item[1]; // X
        const y = item[2]; // Y

        switch (q) {
            case 1:
                idx = (x ^ lastAnswer) % n;
                arr[idx].push(y)
            break;
            case 2:
                idx = (x ^ lastAnswer) % n;
                lastAnswer = arr[idx][y % arr[idx].length];
                res.push(lastAnswer);
            break;
        }
    }

    return res;
}

console.log(dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]])); // [7, 3]