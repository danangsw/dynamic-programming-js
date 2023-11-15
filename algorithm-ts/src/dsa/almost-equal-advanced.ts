/**
 * https://www.hackerrank.com/challenges/almost-equal-advanced/problem
 * 
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h: The first line contains an integer N and K separated by a single space representing the number of Sumo wrestlers who are going to participate and the height difference K.
 *  2. 2D_INTEGER_ARRAY queries
 */

function solve(n: number, k: number, h: number[], queries: number[][]): number[] {
    // Write your code here
    // const mapH:Map<number[], number> = new Map();

    // for (const item of queries) {
    //     mapH.set(item, 0);
    // }

    const res: number[] = [];
    for (const q of queries) {
        let r = 0
        for (let i = q[0]; i <= q[1]; i++) {
            for (let j = (i+1); j <= q[1]; j++) {
                if (Math.abs(h[i] - h[j]) <= k)
                    r++;
            }            
        }
        res.push(r);
    }

    // console.log({ mapH });

    return res;
}

console.log(solve(5, 2, [ 1, 3, 4, 3, 0 ], [ [ 0, 1 ], [ 1, 3 ], [ 0, 4 ] ])) // [1, 3, 6]