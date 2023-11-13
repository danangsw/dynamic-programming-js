/**
 * https://www.hackerrank.com/challenges/larrys-array/problem
 *  
 * Complete the 'larrysArray' function below.
 * 
 * When given any array, for example, [1, 3, 7, 8, 6, 5, 4, 2]
 * 0. find each number in ascending order.
 * 1. find the number 1. it is in the correct position already, no need to move
 * 2. find the number 2, it should move forward. We just need to move number 2 forward each time by jumping over 2 numbers array changes to [1, 2, 3, 7, 8, 6, 5, 4]
 * 3. find the number 3, it is already in the correct position after step 2, no need to move
 * 4. find the number 4, it should also jump over two numbers each time, array change to [1, 2, 3, 4, 7, 8, 6, 5]
 * 5. after jumping number 5, array change to [1, 2, 3, 4, 7, 5, 8, 6] (jumping over 8, 6 only)
 * 6. for step 5, swap 7, 5, 8 to change to [1, 2, 3, 4, 5, 8, 7, 6]
 * 6. find number 6, and jump it to change array to[ 1, 2, 3, 4, 5, 6, 8, 7]
 * 7. this result shows the array could not be ordered finally, return "NO".
 *
 * The function is expected to return a STRING (YES or NO).
 * The function accepts INTEGER_ARRAY A as parameter.
 */

// SUM Inversion solution
// Count sum of all inversion number of each elements in matrix
// If this sum is even, result is YES and vice versa

function larrysArray(A: number[]): string {
    // Write your code here
    return A.reduce((sumA, valA, i) => {
        return A.slice(i)
            .reduce((sumAA, valAA) => {
            return sumAA += valA > valAA ? 1 : 0;
        }, sumA);
    }, 0) % 2 === 0 ? 'YES' : 'NO';
}

// drive code
console.log(larrysArray([1, 3, 7, 8, 6, 5, 4, 2])); // NO
console.log(larrysArray([3, 1, 2])); // YES
console.log(larrysArray([1, 3, 4, 2])); // YES
console.log(larrysArray([1, 2, 3, 5, 4])); // NO
console.log(larrysArray([1, 6, 5, 2, 3, 4])); // NO
console.log(larrysArray([3, 1, 2, 4])); // YES
