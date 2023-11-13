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
            let cell = Math.min(left[i][j], up[i][j], right[i][j], down[i][j]);
            items.push(cell);
            minCellSet.push(cell);
        }
        minGrid.push([...items])
    }

    minCellSet.sort((a, b) => b - a);
    const intersectList: Set<string>[] = [];
    for (let k = 0; k < minCellSet.length && intersectList.length < 2; k++) {
        const mc = minCellSet[k];
        let intersectSet = new Set<string>();
        for (let i = 1; i < glen-1 && intersectSet.size === 0; i++) { 
            const j = minGrid[i].indexOf(mc);
            if (j > -1) { 
                // RIGHT
                for (let x = j; x < mc + j; x++) {   
                    if (!setListHas(intersectList, `key_${i}_${x}`))
                        intersectSet.add(`key_${i}_${x}`);
                }
                // LEFT
                for (let x = j; x > j - mc; x--) {
                    if (!setListHas(intersectList, `key_${i}_${x}`))
                        intersectSet.add(`key_${i}_${x}`);
                }
                // UP
                for (let x = i; x > i - mc; x--) {
                    if (!setListHas(intersectList, `key_${x}_${j}`))
                        intersectSet.add(`key_${x}_${j}`);
                }
                // DOWN
                for (let x = i; x < mc + i; x++) {
                    if (!setListHas(intersectList, `key_${x}_${j}`))
                        intersectSet.add(`key_${x}_${j}`);
                }
                minGrid[i][j] = 0;
                console.log({mc, intersectSet})
            }
        }
        if (intersectSet.size === ((mc - 1) * 4) + 1 && intersectList.length < 2){ 
            intersectList.push(intersectSet);
        }
    }

    console.log({ goodCells, minGrid, minCellSet, intersectList });

    return (intersectList[0] ? intersectList[0].size : 1) * (intersectList[1] ? intersectList[1].size : 1);
}

function setListHas(list: Set<string>[], key:string):boolean { 
    for (const set of list) {
        if (set.has(key)) {
            return true;
        } 
    }
    return false;
}

// Drive code
// console.log(twoPluses(['BBBGBBB', 'BBBGBBB', 'GGGGGGG', 'BBBGBBB', 'BBBGBBB', 'BBBGBBB']));
// console.log(twoPluses(['BBBGGB', 'GGBGGB', 'GGGGGG', 'GGBGGB', 'GGGGGG'])); // 9
// console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
// console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 
// console.log(twoPluses(['BBGBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 0
// console.log(twoPluses(['GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 45
// console.log(twoPluses(['GGGGGG', 'GGGGGG', 'BBBBBB', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 5
// console.log(twoPluses(['BBBBBB', 'BBBBBB', 'BBGBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 1
console.log(twoPluses(['GGGGGGGG', 'GBGBGGBG', 'GBGBGGBG', 'GGGGGGGG', 'GBGBGGBG', 'GGGGGGGG', 'GBGBGGBG', 'GGGGGGGG'])); // 81