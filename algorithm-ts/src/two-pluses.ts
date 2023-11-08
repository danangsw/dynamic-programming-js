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
    
    const goodCells = mapGrid.get('G') as number[][];
    if (!goodCells || goodCells.length === 0)
        return 0;

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
            const cell = goodCells[i][j];
            left[i][j] = ((j !== 0) ? (cell > 0 ? left[i][j - 1] : 0) : 0) + cell;
            up[i][j] = ((i !== 0) ? (cell > 0 ? up[i - 1][j] : 0) : 0) + cell;
       }
    }

    for (let i = glen - 1; i >= 0; i--) {
        for (let j = ilen - 1; j >= 0; j--) {
            const cell = goodCells[i][j];
            right[i][j] = (j !== ilen - 1 ? (cell > 0 ? right[i][j + 1] : 0) : 0) + goodCells[i][j];
            down[i][j] = (i !== glen - 1 ? (cell > 0 ? down[i + 1][j] : 0) : 0) + goodCells[i][j];
       }
    }

    const minCellSet:number[] = [];
    const minGrid: number[][] = [];
    for (let i = 0; i < glen; i++) {
        const items: number[] = [];
        for (let j = 0; j < ilen; j++) {
            const cell = Math.min(left[i][j], up[i][j], right[i][j], down[i][j]);
            items.push(cell);
            minCellSet.push(cell);
        }
        minGrid.push([...items])
    }
    
    console.log({ goodCells, minGrid })

    let totalAreas = 1;
    
    // const maxPlus: number[] = minCellSet.sort();
    // let limit = 2;
    // for (let i = maxPlus.length - 1; i >= 0;){
    //     const item = maxPlus[i] > 0 ? maxPlus[i] : 1;
    //     totalAreas *= ((item - 1) * 4) + 1

    //     i -= (maxPlus[i] + 1);
    //     limit--;
    //     if (limit === 0) break;
    // }
    // console.log({ goodCells, right, down, left, up, minGrid, maxPlus, totalAreas })

    return totalAreas;
}

// Drive code
// console.log(twoPluses(['BBBGBBB', 'BBBGBBB', 'GGGGGGG', 'BBBGBBB', 'BBBGBBB', 'BBBGBBB']));
console.log(twoPluses(['BBBGGB', 'GGBGGB', 'GGGGGG', 'GGBGGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
// console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 
// console.log(twoPluses(['BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 0
console.log(twoPluses(['GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 45
// console.log(twoPluses(['GGGGGG', 'GGGGGG', 'BBBBBB', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 5
// console.log(twoPluses(['BBBBBB', 'BBBBBB', 'BBGBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 1