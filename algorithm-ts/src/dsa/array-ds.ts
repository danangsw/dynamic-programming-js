/**
 * https://www.hackerrank.com/challenges/arrays-ds/problem
 * 
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter
 * int A[n]: the array to reverse
 */

function reverseArray(a: number[]): number[] {
    // Write your code here
    const b: number[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }
    return b;
}

console.log(reverseArray([1, 4, 3, 2])); // 2 3 4 1
