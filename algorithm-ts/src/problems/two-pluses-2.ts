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
class Cell {
  i: number; j: number; radius: number; area: number;
  constructor(i: number, j: number, radius: number, area: number) {
    this.i = i; this.j = j; this.radius = radius; this.area = area
  }
}

class CellList {
  arr: Cell[];
  constructor(arr: Cell[]) {
    this.arr = arr;
  }
  get theTwo(): CellList {
    let two:Cell[] = [];
    for (let i = 0; i < this.arr.length - 1; i++)
      for (let j = i + 1; j < this.arr.length; j++) {
        if (two.length == 0)
          two.push(this.arr[i])
        else if (two.length == 1) {
          if (!intersect(this.arr[i], this.arr[j]))
            two.push(this.arr[j]);
        } else
          if (!intersect(this.arr[i], this.arr[j]))
            if (this.arr[i].area * this.arr[j].area > two[0].area * two[1].area) {
              two[0] = this.arr[i]; two[1] = this.arr[j];
            }
      }
    return new CellList(two);
  }
    get area() {
        return this.arr.length === 0 ? 0 : this.arr[0].area * this.arr[1].area;
    }
}

function twoPluses(grid: string[]): number {
  return new CellList(grid
    .map((r, i) => r.split('')
      .map((_, j) => cross(grid, i, j))
      .flat()
      .filter(c => grid[c.i][c.j] == 'G')
    )
    .flat())
    .theTwo
    .area;
}

function intersect(c1: any, c2: any) {
  let x1 = c2.i == c1.i + Math.min(c1.radius - 1, Math.abs(c1.i - c2.i)) * Math.sign(c2.i - c1.i)
  let y2 = c1.j == c2.j + Math.min(c2.radius - 1, Math.abs(c1.j - c2.j)) * Math.sign(c1.j - c2.j)
  let x2 = c1.i == c2.i + Math.min(c2.radius - 1, Math.abs(c2.i - c1.i)) * Math.sign(c1.i - c2.i)
  let y1 = c2.j == c1.j + Math.min(c1.radius - 1, Math.abs(c2.j - c1.j)) * Math.sign(c2.j - c1.j)
  let s1 = c1.i == c2.i && Math.abs(c2.i - c1.i) < (c2.radius + c1.radius - 2);
  let s2 = c1.j == c2.j && Math.abs(c2.j - c1.j) < (c2.radius + c1.radius - 2);
  return (x1 && y2) || (x2 && y1) || s1 || s2;
}

function cross(g: string[], i: number, j: number): Cell[] {
  let s = [i, i, j, j];
  while (s[0] >= 0 && s[1] < g.length && s[2] >= 0 && s[3] < g[0].length && g[s[0]][j] == 'G' && g[s[1]][j] == 'G' && g[i][s[2]] == 'G' && g[i][s[3]] == 'G')
    s = s.map((e, id) => e + (id % 2 == 0 ? -1 : 1));
  var radius = Math.min(Math.min(i - s[0], s[1] - i), Math.min(j - s[2], s[3] - j));
  var crs = [{ i, j, radius, area: (radius - 1) * 4 + 1 }];
  if (radius > 1)
    for (let k = 1; k < radius; k++)
      crs.push(new Cell(i, j, radius - k, (radius - k - 1) * 4 + 1));
  return crs;
}

// Drive code
// console.log(twoPluses(['BBBGBBB', 'BBBGBBB', 'GGGGGGG', 'BBBGBBB', 'BBBGBBB', 'BBBGBBB']));
console.log(twoPluses(['BBBGGB', 'GGBGGB', 'GGGGGG', 'GGBGGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['GGGGGG', 'GBBBGB', 'GGGGGG', 'GGBBGB', 'GGGGGG'])); // 5
// console.log(twoPluses(['BGBBGB', 'GGGGGG', 'BGBBGB', 'GGGGGG', 'BGBBGB', 'BGBBGB'])); // 25
// console.log(twoPluses(['BGBBRB', 'GRGGGG', 'BGBBGB', 'RGGGGG', 'BRBBGB', 'BGBBRB'])); // 
console.log(twoPluses(['BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 0
console.log(twoPluses(['GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 45
// console.log(twoPluses(['GGGGGG', 'GGGGGG', 'BBBBBB', 'GGGGGG', 'GGGGGG', 'GGGGGG'])); // 5
// console.log(twoPluses(['BBBBBB', 'BBBBBB', 'BBGBBB', 'BBBBBB', 'BBBBBB', 'BBBBBB'])); // 1