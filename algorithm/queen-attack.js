/**
 * https://www.hackerrank.com/challenges/queens-attack-2/problem
 * 
 * 
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here

    if (n < 2) return 0;
    if (r_q > n || c_q > n) return 0;

    const mapAttacks = [];
    // const queenPoint = [{ r: r_q, c: c_q }];
    mapAttacks.push({ r: r_q, c: c_q });

    for (let i = 1; i <= n; i++) {
        // Diagonal up
        const c_dup = (c_q - r_q) + i;
        if (mapAttacks.findIndex(o => o.r === i && o.c === c_dup) < 0
            && c_dup >= 1 && c_dup <= n)
            mapAttacks.push({ r: i, c: c_dup })

        // Diagonal down
        const c_ddo = (c_q + r_q) - i;
        if (mapAttacks.findIndex(o => o.r === i && o.c === c_ddo) < 0
            && c_ddo >= 1 && c_ddo <= n)
            mapAttacks.push({ r: i, c: c_ddo })
        
        // Column
        if (mapAttacks.findIndex(o => o.r === i && o.c === c_q) < 0)
            mapAttacks.push({ r: i, c: c_q })

        // Row
        if (mapAttacks.findIndex(o => o.r === r_q && o.c === i) < 0)
            mapAttacks.push({ r: r_q, c: i })
    }

    let attacks = 0;
    mapAttacks.forEach(a => { 
        const obs = obstacles.find(e => e[0] === a.r && e[1] === a.c);
        if (obs) { 
            console.log(a, obs)
            attacks++;
        }
    })

    return attacks;

    //console.timeLog('log', mapAttacks, obstacles, (mapAttacks.length-1), n*2 - 2);
}

console.time('log');
console.log(queensAttack(5, 3, 4, 3, [[5,5], [4,2], [2,3]])); // output: 9 
console.timeLog('log', 'END');