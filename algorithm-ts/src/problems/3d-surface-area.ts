/**
 * https://www.hackerrank.com/challenges/3d-surface-area/problem
 * 
 * The first line contains two space-separated integers H and W the height and the width of the board respectively.
 * The next  lines contains space separated integers. The 'j' integer in 'i' line denotes A[i,j].
 * 
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A: number[][]): number {
    // Write your code here
    const x = A.length, y = A[0].length;
    let sumFaces: number = 2 * x * y;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (i > 0)
                sumFaces += Math.abs(A[i][j] - A[i - 1][j])
            else
                sumFaces += A[i][j]
            if (i === x - 1)
                sumFaces += A[i][j]
            
            if (j > 0)
                sumFaces += Math.abs(A[i][j] - A[i][j - 1])
            else
                sumFaces += A[i][j]
            if (j === y - 1)
                sumFaces += A[i][j]
        }
    }
    
    return sumFaces;
}

// Drive code
console.log(surfaceArea([[1]])); // 6
console.log(surfaceArea([ [ 1, 3, 4 ], [ 2, 2, 3 ], [ 1, 2, 4 ] ])); // 60
