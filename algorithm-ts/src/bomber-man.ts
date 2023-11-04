/**
 * https://www.hackerrank.com/challenges/bomber-man/problem
 * 
 * Complete the bomberMan function in the editory below.
 * bomberMan has the following parameter(s):
 * int n: the number of seconds to simulate
 * string grid[r]: an array of strings that represents the grid
 * 
 * Returns
 * string[r]: n array of strings that represent the grid in its final state
 */

function replaceAt (str:string, index: number, char: string) { 
    return `${str.slice(0, index) + char + str.slice(index + 1)}`;
}

function bomberMan(n: number, grid: string[]): string[] {
    // Write your code here
    const C = '.';
    const B = 'O';
    enum State {
        First = 1,
        Second = 2,
        Third = 3
    }
    const plantingForm:string[] = [];
    const detonateForm:string[] = [];
    const finalFrom:string[] = [];
    
    // 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
    const glen = grid.length;
    const ilen = grid[0].length;
    for (let i = 0; i < grid.length; i++) {
        const item = grid[i];
        // Filling all cells without bombs
        let fillBomb = String().padStart(ilen, B);
        plantingForm.push(fillBomb);

        if (!detonateForm[i]) { 
            detonateForm.push(fillBomb);
        }

        // find bomb indexes
        let charAt = item.indexOf(B); 
        
        while (charAt !== -1) {
            // Set detonate indexes
            const topIdx = (i - 1) < 0 ? -1 : (i - 1); // TOP index before
            const rightIdx = (charAt + 1) >= ilen ? -1 : (charAt + 1); // RIGHT index after
            const bottomIdx = (i + 1) >= glen ? -1 : (i + 1); // BOTTOM index after
            const leftIdx = (charAt - 1) < 0 ? -1 : (charAt - 1); // LEFT index before

            detonateForm[i] = replaceAt(detonateForm[i], charAt, C);

            if (topIdx > -1) { 
                if (detonateForm[topIdx]) { 
                    detonateForm[topIdx] = replaceAt( detonateForm[topIdx], charAt, C);
                }
            }
            
            if (leftIdx > -1) { 
                detonateForm[i] = replaceAt( detonateForm[i], leftIdx, C);
            }

            if (rightIdx > -1) { 
                detonateForm[i] = replaceAt( detonateForm[i], rightIdx, C);
            }
           
            if (bottomIdx > -1) { 
                if (!detonateForm[bottomIdx]) { 
                    detonateForm.push(replaceAt(fillBomb, charAt, C));
                }
            }

            //  console.log({i, iB, tI, rI, bI, lI, iBList, tBList, bBList});
        
            // Find next index           
            charAt = item.indexOf(B, charAt + 1);
        }
        // Set initial detonate form indexes
    }
    //console.log({ bomMap, plantingForm, detonateForm });
    
    // 2. After 1 second, Bomberman does nothing.
    if (n === State.First) { 
        finalFrom.push(...grid);
        return finalFrom;
    }
    
    const finalState: number = n % State.Second;
    switch (finalState) {
        case 0:
            // 3. After 2 second, Bomberman plants bombs in all cells without bombs, 
            // thus filling the whole grid with bombs.No bombs detonate at this point.
            finalFrom.push(...plantingForm);
            break;
        case 1:
            // 4. After 3 second, any bombs planted exactly 3 seconds ago will detonate. 
            // Here, Bomberman stands back and observes.
            finalFrom.push(...detonateForm);
            break;
            // 5. Bomberman then repeats steps 3 and 4 indefinitely.
    }

    return finalFrom;
}

// Driven code
let tc: string[];

// tc = [ '.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'];
// console.log(bomberMan(3, tc)); // OOO.OOO, OO...OO, OOO...O, ..OO.OO, ...OOOO, ...OOOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(1, tc)); // OOO, OOO, OOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(2, tc)); // OOO, OOO, OOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(3, tc)); // O.O, ..., O.O

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(4, tc)); // OOO, OOO, OOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(5, tc)); // OOO, OOO, OOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(6, tc)); // O.O, ..., O.O

tc = ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...'];
console.log(bomberMan(1, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(2, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(3, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(4, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(5, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(6, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO