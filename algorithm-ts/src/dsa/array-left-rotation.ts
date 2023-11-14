/**
 * https://www.hackerrank.com/challenges/array-left-rotation/problem
 * 
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d: number, arr: number[]): number[] {
    // Write your code here
    const alen = arr.length;
    const newArr: number[] = [...arr];

    for (let i = 0; i < alen; i++) {
        const idd = i - (d % alen)
        const j = idd < 0 ? (alen + idd) : idd;
        newArr[j] = arr[i];
    }

    return newArr;
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
console.log(rotateLeft(3, [1, 2, 3, 4, 5]));
console.log(rotateLeft(8, [1, 2, 3, 4, 5]));
console.log(rotateLeft(0, [1, 2, 3, 4, 5]));
console.log(rotateLeft(10, [1, 2, 3, 4, 5]));
console.log(rotateLeft(1, [1, 2, 3, 4, 5]));
console.log(rotateLeft(6, [1, 2, 3, 4, 5]));