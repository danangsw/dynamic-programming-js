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

const C = '.';
const B = 'O';
enum State {
    First = 1,
    Second = 2,
    Third = 3
}

function replaceAt (str:string, index: number, char: string) { 
    return `${str.slice(0, index) + char + str.slice(index + 1)}`;
}

function detonateBomb(grid: string[]): string[] {
    const glen = grid.length;
    const ilen = grid[0].length;
    const initialForm: string[] = [...grid];
    const detonateForm: string[] = [];

    // 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
    // Masking initial bomb
    for (let i = 0; i < initialForm.length; i++) {
        // Filling all cells without bombs
        let fillBomb = String().padStart(ilen, B);
        if (!detonateForm[i]) { 
            detonateForm.push(fillBomb);
        }

        // find bomb indexes
        const item = initialForm[i];
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
                fillBomb = replaceAt(fillBomb, charAt, C);
                if (!detonateForm[bottomIdx]) {
                    detonateForm.push(fillBomb);
                } else { 
                    detonateForm[bottomIdx] = fillBomb;
                }
            }
            // Find next index           
            charAt = item.indexOf(B, charAt + 1);
        }
        // console.log({i, detonateForm})
        // Set initial detonate form indexes
    }
    
    return detonateForm;
}

function plantingBomb(grid: string[]): string[] {
    const ilen = grid[0].length;
    const initialForm: string[] = [...grid];
    const plantingForm: string[] = [];
    
    for (let i = 0; i < initialForm.length; i++) {
        // Filling all cells without bombs
        let fillBomb = String().padStart(ilen, B);
        plantingForm.push(fillBomb);
    }

    return plantingForm;
}

function bomberMan(n: number, grid: string[]): string[] {
    // Write your code here
    // console.log(n, '------------')

    const plantingForm:string[] = [...plantingBomb(grid)];
    let initialForm: string[] = [...grid];
    let finalForm: string[] = [];
    let detonateForms: string[][] = [];
    //console.log({ bomMap, plantingForm, detonateForm });
    // 2. After 1 second, Bomberman does nothing.
    if (n === State.First) { 
        return initialForm;
    }

    if (n % 2 === 0) {
        return plantingForm;
    }

    // 3. After 2 second, Bomberman plants bombs in all cells without bombs, 
    // thus filling the whole grid with bombs.No bombs detonate at this point.
    // 4. After 3 second, any bombs planted exactly 3 seconds ago will detonate.
    // Here, Bomberman stands back and observes.
    // 5. Bomberman then repeats steps 3 and 4 indefinitely.
    
    // Generated denotated first form
    // Generated denotated second form
    for (let i = 0; i < 2; i++) {
        initialForm = detonateBomb(initialForm);
        detonateForms.push(initialForm);
    }
    if (Math.round(n / 2) % 2 === 0)
        finalForm = detonateForms[0]
    else
        finalForm = detonateForms[1]
    
    return finalForm;
}

// Driven code
console.time('test_time')
let tc: string[];

// tc = [ '.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'];
// console.log(bomberMan(3, tc)); // OOO.OOO, OO...OO, OOO...O, ..OO.OO, ...OOOO, ...OOOO

// tc = [ '...', '.O.', '...' ];
// console.log(bomberMan(1, tc)); // ..., .O., ...
// console.log(bomberMan(2, tc)); // OOO, OOO, OOO
// console.log(bomberMan(3, tc)); // O.O, ..., O.O
// console.log(bomberMan(4, tc)); // OOO, OOO, OOO
// console.log(bomberMan(5, tc)); // ..., .O., ...
// console.log(bomberMan(6, tc)); // OOO, OOO, OOO
// console.log(bomberMan(7, tc)); // O.O, ..., O.O

tc = ['.......', '...O.O.', '....O..', '..O....', 'OO...OO', 'OO.O...'];
console.log(bomberMan(1, tc));
console.log(bomberMan(2, tc)); 
console.log(bomberMan(3, tc)); 
console.log(bomberMan(4, tc)); 
console.log(bomberMan(5, tc)); // ......., ...O.O., ...OO.., ..OOOO., OOOOOOO, OOOOOOO
console.log(bomberMan(6, tc)); 
console.log(bomberMan(7, tc)); 
console.log(bomberMan(8, tc)); 
console.log(bomberMan(9, tc)); 
console.log(bomberMan(10, tc)); 
console.log(bomberMan(11, tc)); 
console.log(bomberMan(12, tc)); 
console.log(bomberMan(13, tc)); 

console.timeLog('test_time')