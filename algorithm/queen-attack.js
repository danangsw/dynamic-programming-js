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

    let mapAttacks = [];

    columnUp(c_q, r_q + 1, n, obstacles, mapAttacks);
    columnDown(c_q, r_q - 1, 1, obstacles, mapAttacks);
    rowUp(r_q, c_q + 1, n, obstacles, mapAttacks);
    rowDown(r_q, c_q - 1, 1, obstacles, mapAttacks);
    diagUpUp(r_q, c_q, r_q + 1, n, obstacles, mapAttacks, n);
    diagUpDown(r_q, c_q, r_q - 1, 1, obstacles, mapAttacks, n);
    diagDownUp(r_q, c_q, r_q + 1, n, obstacles, mapAttacks, n);
    diagDownDown(r_q, c_q, r_q - 1, 1, obstacles, mapAttacks, n);

    // console.log(obstacles);
    // console.log(mapAttacks);

    return mapAttacks.length;
}

function buildColumns(c_q, obstacles, mapAttacks, i) { 
    if (obstacles.findIndex(e => e[0] === i && e[1] === c_q) > -1) return false;
    if (mapAttacks.findIndex(o => o.r === i && o.c === c_q) < 0)
        mapAttacks.push({ r: i, c: c_q })
    return true;
}

function columnUp(c_q, start, end, obstacles, mapAttacks) { 
    for (let i = start; i <= end; i++) { 
        if (!buildColumns(c_q, obstacles, mapAttacks, i)) return;
    }
}

function columnDown(c_q, start, end, obstacles, mapAttacks) { 
    for (let i = start; i >= end; i--) { 
        if (!buildColumns(c_q, obstacles, mapAttacks, i)) return;
    }
}

function buildRows(r_q, obstacles, mapAttacks, i) { 
    if (obstacles.findIndex(e => e[0] === r_q && e[1] === i) > -1) return false;
    if (mapAttacks.findIndex(o => o.r === r_q && o.c === i) < 0)
        mapAttacks.push({ r: r_q, c: i })
    return true;
}

function rowUp(r_q, start, end, obstacles, mapAttacks) { 
    for (let i = start; i <= end; i++) { 
        if (!buildRows(r_q, obstacles, mapAttacks, i)) return;
    }
}

function rowDown(r_q, start, end, obstacles, mapAttacks) { 
    for (let i = start; i >= end; i--) { 
       if (!buildRows(r_q, obstacles, mapAttacks, i)) return;
    }
}

function buildDiagUp(r_q, c_q, obstacles, mapAttacks, n, i) { 
    const c_dup = (c_q - r_q) + i;
    if (obstacles.findIndex(e => e[0] === i && e[1] === c_dup) > -1) return false;
    if (mapAttacks.findIndex(o => o.r === i && o.c === c_dup) < 0
        && c_dup >= 1 && c_dup <= n)
        mapAttacks.push({ r: i, c: c_dup });
    return true;
}

function diagUpUp(r_q, c_q, start, end, obstacles, mapAttacks, n) {
    for (let i = start; i <= end; i++) {
        if (!buildDiagUp(r_q, c_q, obstacles, mapAttacks, n, i)) return;
    }
}

function diagUpDown(r_q, c_q, start, end, obstacles, mapAttacks, n) {
    for (let i = start; i >= end; i--) {
        if (!buildDiagUp(r_q, c_q, obstacles, mapAttacks, n, i)) return;
    }
}

function buildDiagDown(r_q, c_q, obstacles, mapAttacks, n, i) { 
     const c_ddo = (c_q + r_q) - i;
    if (obstacles.findIndex(e => e[0] === i && e[1] === c_ddo) > -1) return false;
    if (mapAttacks.findIndex(o => o.r === i && o.c === c_ddo) < 0
        && c_ddo >= 1 && c_ddo <= n)
        mapAttacks.push({ r: i, c: c_ddo });
    return true;
}

function diagDownUp(r_q, c_q, start, end, obstacles, mapAttacks, n) {
    for (let i = start; i <= end; i++) {
        if (!buildDiagDown(r_q, c_q, obstacles, mapAttacks, n, i)) return;
    }
}

function diagDownDown(r_q, c_q, start, end, obstacles, mapAttacks, n) {
    for (let i = start; i >= end; i--) {
        if (!buildDiagDown(r_q, c_q, obstacles, mapAttacks, n, i)) return;
    }
}

console.time('log');
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])); // output: 10
console.log(queensAttack(1, 0, 1, 1, [])); // output: 10
console.log(queensAttack(4, 0, 4, 4, [])); // output: 9
console.log(queensAttack(8, 1, 4, 4, [[3,5]])); // output: 24
console.timeLog('log', 'END');