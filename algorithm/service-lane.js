/**
 * https://www.hackerrank.com/challenges/service-lane/problem
 * 
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n: the size of the  array
 *  2. 2D_INTEGER_ARRAY cases: each element contains the starting and ending indices for a segment to consider, inclusive
 * 
 * Returns:
 * int[t]: the maximum width vehicle that can pass through each segment of the service lane described
 */
function serviceLane(width, cases) {
    // Write your code here
    return cases.map(lane => {
        return width.slice(lane[0], lane[1] + 1).sort()[0];
    });
}

// drive code
console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]])); // [1, 2, 3, 2, 1]