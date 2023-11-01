/**
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 * 
 * Complete the flatlandSpaceStations function in the editor below.
 * 
 * flatlandSpaceStations has the following parameter(s):
 * int n: the number of cities
 * int c[m]: the indices of cities with a space station
 * 
 * Returns
 * int: the maximum distance any city is from a space station
 */

function flatlandSpaceStations(n, c) {
    let maxDist = 0;

    if (n === c.length) return maxDist;

    for (let i = 0; i < n; i++) { 
        const cmap = c.reduce((mx, s) =>
            (Math.abs(s - i) < mx) ? Math.abs(s - i) : mx,
            Number.MAX_SAFE_INTEGER);
        maxDist =  (cmap > maxDist) ? cmap : maxDist;
    }

    return maxDist;
}

console.log(flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5])); // 0
console.log(flatlandSpaceStations(5, [0, 4])); // 2
console.log(flatlandSpaceStations(20, [13, 1, 11, 10, 6])); // 6