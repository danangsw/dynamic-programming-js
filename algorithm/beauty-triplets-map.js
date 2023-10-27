/**
 * https://www.hackerrank.com/challenges/beautiful-triplets/problem
 * 
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    const timelog = 'timelog_' + Math.random();
    console.time(timelog)
    
    const map = new Map();
    let countTrip = 0;
    arr.forEach((a, i) => {
        if (!map.has(a)) map.set(a, 0);
        
        map.set(a, map.get(a) + 1);
        const x = map.get(a - d);
        const y = map.get(a - 2 * d);
        
        countTrip += (x ? x : 0) * (y ? y : 0)
    });

    console.timeLog(timelog);
    return countTrip;
}

// Code Driven
console.log(beautifulTriplets(1, [2, 2, 3, 4, 5])); // 3
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // 3
console.log(beautifulTriplets(1, [1, 2, 3, 4, 5, 6, 7, 8])); // 6
console.log(beautifulTriplets(2, [1, 2, 3, 4, 5, 6, 7, 8])); // 4
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19])); // 2
console.log(beautifulTriplets(2, [1, 6, 8, 9, 9, 10, 12, 13, 14, 19])); // 3