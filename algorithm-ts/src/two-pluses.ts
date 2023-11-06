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

    // Convert to numeric items
    const defGridNumerics = String().padStart(ilen, '0')
        .split('').map(c => parseInt(c));

    for (const val of setGrid) {
        let items: number[][] = [];
        for (const item of grid) { 
            let gridItems = [...defGridNumerics];            
            let charAt = item.indexOf(val as string); 
        
            while (charAt !== -1) {
                // Set detonate indexes
                gridItems[charAt] = 1;
                // Find next index           
                charAt = item.indexOf(val as string, charAt + 1);
            }

            items.push(gridItems);
        }

        mapGrid.set(val, items)
    }
    console.log(mapGrid);

    const maxPlus:number[] = [1, 1];
    for (const [key, item] of mapGrid) { 
        // Calculate the largest SUM of contiguos subarray
       
    }

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
console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 25