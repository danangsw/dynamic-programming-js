/**
 * https://www.hackerrank.com/challenges/cavity-map/problem
 * 
 * Complete the cavityMap function in the editor below.
 * cavityMap has the following parameter(s):
 * string grid[n]: each string represents a row of the grid
 * 
 * Returns
 * string{n}: the modified grid
 */

function cavityMap(grid: string[]): string[] {
  const len = grid.length;
  const map: string[][] = [];
  const result: string[] = [];

  for (const item of grid) {
    map.push(item.split('') as string[]);
    result.push(item);
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const ij = parseInt(map[i][j] as string);
      const iu = map[i - 1] === undefined ? Number.MAX_VALUE : parseInt(map[i - 1][j] as string);
      const ib = map[i + 1] === undefined ? Number.MAX_VALUE : parseInt(map[i + 1][j] as string);
      const jl = map[i][j - 1] === undefined ? Number.MAX_VALUE : parseInt(map[i][j - 1] as string);
      const jr = map[i][j + 1] === undefined ? Number.MAX_VALUE : parseInt(map[i][j + 1] as string);

      if (ij > iu && ij > ib && ij > jl && ij > jr) {
        const tr = result[i].split('')
        tr[j] = 'X' as string;
        result[i] = tr.join('');
      }
    }
  }

  return result;
}

// Driven code
console.log(cavityMap(['1112', '1912', '1892', '1234'])); // output: ['1112', '1X12', '18X2', '1234']
console.log(cavityMap(['989', '191', '111'])); // output: ['989', '1X1', '111']
console.log(cavityMap( ['999', '999', '999'])) // output: ['989', '1X1', '111']