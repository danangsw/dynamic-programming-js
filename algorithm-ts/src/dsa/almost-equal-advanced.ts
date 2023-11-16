/**
 * WORK IN PROGRESS
 * https://www.hackerrank.com/challenges/almost-equal-advanced/problem
 * 
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h: The first line contains an integer N and K separated by a single space representing the number of Sumo wrestlers who are going to participate and the height difference K.
 *  2. 2D_INTEGER_ARRAY queries
 */

interface diff { 
    l: number,
    r: number
}
function solve(n: number, k: number, h: number[], queries: number[][]): number[] {
    // Write your code here
    // const mapH:Map<number[], number> = new Map();

    // for (const item of queries) {
    //     mapH.set(item, 0);
    // }

    const diffWeights: diff[] = [];
    for (let i = 0; i < Math.floor(h.length / 2); i++) {
        for (let j = (i + 1); j < h.length; j++) {
            if (Math.abs(h[i] - h[j]) <= k) {
                const d: diff = {
                    l: i,
                    r: j
                };
                diffWeights.push(d);
            }            
        }
    }
    for (let i = Math.floor(h.length / 2); i < h.length; i++) {
        for (let j = i + 1; j < h.length; j++) {
            if (Math.abs(h[i] - h[j]) <= k) {
                const d: diff = {
                    l: i,
                    r: j
                };
                diffWeights.push(d);
            }            
        }
    }

    const res: number[] = [];
    for (const q of queries) {
        res.push(diffWeights.filter(diff => diff.l >= q[0] && diff.r <= q[1]).length);
    }

    // console.log({ mapH });

    return res;
}

console.log(solve(5, 2, [ 1, 3, 4, 3, 0 ], [ [ 0, 1 ], [ 1, 3 ], [ 0, 4 ] ])) // [1, 3, 6]