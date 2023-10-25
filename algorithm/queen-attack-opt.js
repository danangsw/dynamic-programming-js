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
    let ret = 0;

    const dirs = [
        [0, -1], [0, 1], [1, 1], [-1, -1],
        [1, 0], [-1, 0], [1, -1], [-1, 1]
    ];

    const obstacleSet = new Set();

    for (const obstacle of obstacles) {
        obstacleSet.add(obstacle[0] + "," + obstacle[1]);
    }

    while (dirs.length > 0) {
        const newDirs = [];

        for (const dir of dirs) {
            const [dx, dy] = dir;
            let r = r_q + dx;
            let c = c_q + dy;

            if (r > 0 && r <= n && c > 0 && c <= n && !obstacleSet.has(r + "," + c)) {
                ret++;

                let newX = dx;
                let newY = dy;

                if (dx > 0) {
                    newX += 1;
                } else if (dx < 0) {
                    newX -= 1;
                }

                if (dy > 0) {
                    newY += 1;
                } else if (dy < 0) {
                    newY -= 1;
                }

                newDirs.push([newX, newY]);
            }
        }

        dirs.length = 0;
        dirs.push(...newDirs);
    }

    return ret;
}

console.time('log');
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])); // output: 10
console.log(queensAttack(1, 0, 1, 1, [])); // output: 10
console.log(queensAttack(4, 0, 4, 4, [])); // output: 9
console.log(queensAttack(8, 1, 4, 4, [[3,5]])); // output: 24
console.timeLog('log', 'END');