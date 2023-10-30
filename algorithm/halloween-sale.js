/**
 * https://www.hackerrank.com/challenges/halloween-sale/problem
 * 
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p - the price of first game
 *  2. INTEGER d - the discount from the previous game price
 *  3. INTEGER m - the minimum cost of a game
 *  4. INTEGER s - the starting budget
 */

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let i = 0;

    while (p <= s) { 
        s -= p;
        p = (p - d) > m ? (p - d) : m;
        i++;
    } 

    return i;
}

// Drive code
console.log(howManyGames(20, 3, 6, 70)); // output: 5
console.log(howManyGames(20, 3, 6, 80)); // output: 6
console.log(howManyGames(20, 3, 6, 85)); // output: 7
console.log(howManyGames(100, 1, 1, 99)) // output: 0