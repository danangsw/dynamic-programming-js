/**
 * Complete the stones function in the editor below.
 * stones has the following parameter(s):
 * 
 * int n: the number of non-zero stones
 * int a: one possible integer difference
 * int b: another possible integer difference
 * 
 * Returns
 * int[]: all possible values of the last stone, sorted ascending
 */

function stones(n: number, a: number, b: number): number[] {
    // Write your code here
    const resultSet = new Set<number>();
    for (let i = 0; i < n; i++) { 
        let sumNumb = 0
        for (let j = 1; j < n; j++) {
            sumNumb += ((i + j ) < n) ? (a > b ? b: a) : (a > b ? a : b);
        }
        resultSet.add(sumNumb);
    }

    return [...resultSet];
}

// Driven code
console.log(stones(3, 1, 2)); // output: [2, 3, 4]
console.log(stones(4, 10, 100)); // output: [30, 120, 210, 300]
console.log(stones(7, 9, 11)); // output: [54, 56, 58, 60, 62, 64, 66]
console.log(stones(4, 8, 16)); // output: [24, 32, 40, 48]
console.log(stones(58, 69, 24)); // output: [1368, 1413, 1458, 1503, 1548, 1593, 1638, 1683, 1728, 1773, 1818, 1863, 1908, 1953, 1998, 2043, 2088, 2133, 2178, 2223, 2268, 2313, 2358, 2403, 2448, 2493, 2538, 2583, 2628, 2673, 2718, 2763, 2808, 2853, 2898, 2943, 2988, 3033, 3078, 3123, 3168, 3213, 3258, 3303, 3348, 3393, 3438, 3483, 3528, 3573, 3618, 3663, 3708, 3753, 3798, 3843, 3888, 3933];
console.log(stones(5, 3, 23)); // output: [12, 32, 52, 72, 92]
console.log(stones(12, 73, 82)); // output: [803 812 821 830 839 848 857 866 875 884 893 902]
console.log(stones(73, 25, 25)); // output: [1800]

