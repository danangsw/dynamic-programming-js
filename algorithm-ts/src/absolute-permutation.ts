/**
 * https://www.hackerrank.com/challenges/absolute-permutation/problem
 * 
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n: the upper bound of natural numbers to consider, inclusive
 *  2. INTEGER k: the absolute difference between each element's value and its index
 */
const CACHE_MAP = new Map();
function absolutePermutation(n: number, k: number): number[] {
    // Write your code here
    const km = `keymap_${n}_${k}`;

    if (CACHE_MAP.has(km)) return CACHE_MAP.get(km);

    if (k > 0 && n % (k * 2) !== 0) { 
        CACHE_MAP.set(km, [-1]);
        return CACHE_MAP.get(km);
    }

    let flag = -1;
    const result: number[] = [];
    for (let i = 1, j = 0; i <= n; i++, j++) {
        if (j % k === 0) flag *= -1;

        const pv = i + k * flag;
        result.push(pv);
    }

    CACHE_MAP.set(km, result);
    return CACHE_MAP.get(km);
}

// Driven code
console.time('test');
console.log(absolutePermutation(200000, 1)); //
console.log(absolutePermutation(2, 1)); // o: [2, 1]
console.log(absolutePermutation(3, 0)); // o: [1, 2, 3]
console.log(absolutePermutation(3, 2)); // o: [-1]
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(2, 1)); // o: [2, 1]
console.log(absolutePermutation(10, 5)); // o: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
console.log(absolutePermutation(7, 5)); // o: [-1]
console.log(absolutePermutation(2, 1)); // o: [2, 1]
console.log(absolutePermutation(2, 0)); // o: [1, 2]
console.log(absolutePermutation(2, 0)); // o: [1, 2]
console.log(absolutePermutation(1, 0)); // o: [1]
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(10, 5)); // o: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
console.log(absolutePermutation(10, 0)); // o: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(absolutePermutation(6, 0)); // o: [1, 2, 3, 4, 5, 6]
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(6, 3)); // o: [4, 5, 6, 1, 2, 3]
console.log(absolutePermutation(15, 3)); // o: [-1]
console.log(absolutePermutation(15, 0));
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(15, 15));
console.log(absolutePermutation(10, 5)); // o: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
console.log(absolutePermutation(10, 0)); // o: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(absolutePermutation(200000, 1)); //
console.log(absolutePermutation(200000, 1)); //
console.log(absolutePermutation(200000, 1)); //
console.log(absolutePermutation(98280, 84)); //

console.log(absolutePermutation(3, 2)); // o: [-1]
console.log(absolutePermutation(10, 0)); // 1 2 3 4 5 6 7 8 9 10
console.log(absolutePermutation(10, 1)); // 2 1 4 3 6 5 8 7 10 9
console.log(absolutePermutation(10, 2)); // -1
console.log(absolutePermutation(10, 3)); // -1
console.log(absolutePermutation(10, 4)); // -1
console.log(absolutePermutation(10, 5)); // [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
console.log(absolutePermutation(7, 0)); // 1 2 3 4 5 6 7
console.log(absolutePermutation(10, 9)); // -1
console.log(absolutePermutation(9, 0)); // 1 2 3 4 5 6 7 8 9
console.log(absolutePermutation(10, 3)); // -1
console.log(absolutePermutation(8, 2)); // 3 4 1 2 7 8 5 6
console.log(absolutePermutation(8, 0)); // 1 2 3 4 5 6 7 8
console.log(absolutePermutation(7, 0)); // 1 2 3 4 5 6 7
console.log(absolutePermutation(10, 1)); // 2 1 4 3 6 5 8 7 10 9
console.log(absolutePermutation(98280, 84)); //
console.log(absolutePermutation(98280, 84)); //
console.log(absolutePermutation(98280, 84)); //
console.log(absolutePermutation(98280, 84)); //
console.log(absolutePermutation(98280, 84)); //
console.timeLog('test');