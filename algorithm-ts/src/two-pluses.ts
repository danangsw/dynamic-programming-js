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
    const mapGrid = new Map();

    for (let i = 0; i < glen; i++) {
        const item = grid[i];
        
        for (let j = 0; j < item.length; j++) {
            const char = item[j];
            let charIndexes: number[][] = [];

            if (mapGrid.has(char)) { 
                charIndexes = mapGrid.get(char);
            }
        
            charIndexes.push([i, j])
            mapGrid.set(char, charIndexes);
        }
    }

    console.log(mapGrid);

    return 0;
}

// Drive code
console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 25