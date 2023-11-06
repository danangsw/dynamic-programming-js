import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

/**
 * https://www.hackerrank.com/challenges/two-pluses/problem
 * 
 * Complete the twoPluses function in the editor below. 
 * It should return an integer that represents the area of the two largest pluses.
 * 
 * The function accepts STRING_ARRAY grid as parameter
 * an array of strings where each string represents a row and each character of the string represents a column of that row
 *
 * The function is expected to return an INTEGER.
 *  
 **/
function twoPluses(grid: string[]): number {
    // Write your code here
    const glen = grid.length;
    const ilen = grid[0].length;
    const mapGrid = new Map();
    const setGrid = new Set();

    // Get the unique values
    for (const item of grid) {
        for (let i = 0; i < ilen; i++) {
            setGrid.add(item[i]);
        }
    }

    const defGridNumerics = String().padStart(ilen, '0')
        .split('').map(c => parseInt(c));

    for (const val of setGrid) {
        let items: number[][] = [];
        for (const item of grid) { 
            let gridItems = [...defGridNumerics];
            
            let charAt = item.indexOf(val as string); 
            while (charAt !== -1) {
                // Set indexes value
                gridItems[charAt] = 1;
                // Find next index           
                charAt = item.indexOf(val as string, charAt + 1);
            }

            items.push(gridItems);
        }

        mapGrid.set(val, items)
    }

    const maxPlus: number[] = [1, 1];
    
    const goodCells = mapGrid.get('G') as number[][];

     // Initializing all four arrays of left, right, up and down
    const left: number[][] = [];
    const up: number[][] = [];
    const right: number[][] = [];
    const down: number[][] = [];
    for (const i of grid) {
        left.push([...defGridNumerics]);
        up.push([...defGridNumerics]);
        right.push([...defGridNumerics]);
        down.push([...defGridNumerics]);
    }

    for (let i = 0; i < glen; i++) {
        for (let j = 0; j < ilen; j++) {
            left[i][j] = ((j !== 0) ? left[i][j - 1] : 0) + goodCells[i][j];
            up[i][j] = ((i !== 0) ? up[i - 1][j] : 0) + goodCells[i][j];
       }
    }

    for (let i = glen - 1; i >= 0; i--) {
        for (let j = ilen - 1; j >= 0; j--) {
            right[i][j] = (j !== ilen - 1 ? right[i][j+1] : 0)  + goodCells[i][j];
            down[i][j] = (i !== glen - 1 ? down[i + 1][j] : 0) + goodCells[i][j];
       }
    }

    console.log({goodCells, right, down, left, up})
   
    return maxPlus[0] * maxPlus[1]
}

function maxTwoPlus(arr: number[][]): number[] { 
    let max:number[] = [1, 1];

    // Initializing all four arrays of left, right, up and down
    // Initializing up left and up
    // Initializing up right and down
    // Calculating the value of Maximum PLUS (+) sign

    return max;
}

// Drive code
console.log(twoPluses(['BBBBBB', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
// console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 25