/**
 * Pengenalan konsep bilangan positip dan negatif
 */

/**
 * Fungsi untuk generate array results dengan operator '+' atay '-' 
 * @param {*} start -n integer to +n integer
 * @param {*} operator '+' atau '-'
 * @param {*} limit -n integer to +n integer
 * @returns array list
 */
const arrayMatika = (start, operator, limit) => {
    let results = [];

    switch (operator) {
        case '+':
            if (limit > 0) {
                // Penambahan bilangan positif
                while (limit >= 0) {
                    // geser kanan sebanyak n limit
                    results.push(start++);
                    limit--;
                }
            } else { 
                // Penambahan bilangan negatif
                while (limit <= 0) {
                    // geser kiri sebanyak n limit
                    results.unshift(start--)
                    limit++;
                }
            }
            break;
        case '-':
            if (limit > 0) {
                // Pengurangan bilangan positif
                while (limit >= 0) {
                    // geser kiri sebanyak n limit
                    results.unshift(start--)
                    limit--;
                }
            } else { 
                // Pengurangan bilangan negatif
                while (limit <= 0) {
                    // geser kanan sebanyak n limit
                    results.push(start++);
                    limit++;
                }
            }
            break;
        default:
            break;
    }

    return results;
};

const arrayMatikaOptimized = (start, operator, limit) => {
    let results = [];
    let increment = Math.abs(limit);

    while (increment >= 0) {
        // Operasi '+'
        if (operator === '+') {
            // Penambahan(+): geser kanan sebanyak n limit
            if (limit > 0) {
                results.push(start++);
            }
            // Penambahan(-): geser kiri sebanyak n limit
            else {
                results.unshift(start--);
            }
        }
        // Operasi '-'
        else if (operator === '-') {
            // Pengurangan(+): geser kiri sebanyak n limit
            if (limit > 0) {
                results.unshift(start--);
            }
            // Pengurangan(-): geser kanan sebanyak n limit
            else {
                results.push(start++);
            }
        }
        else { 
            break;
        }
        increment--;
    }
    return results;
};

// console.log('Penambahan:')
console.log(arrayMatika(2, '+', -3));
console.log(arrayMatika(2, '+', 3));
console.log(arrayMatika(-2, '+', -3));
console.log(arrayMatika(-2, '+', 3));
console.log(arrayMatika(-2, '+', 2));
console.log(arrayMatika(2, '+', 0));
console.log('Pengurangan:')
console.log(arrayMatika(2, '-', -3));
console.log(arrayMatika(2, '-', 3));
console.log(arrayMatika(-2, '-', -3));
console.log(arrayMatika(-2, '-', 3));
console.log(arrayMatika(-2, '-', -2));
console.log(arrayMatika(-2, '+', 0));

console.log('++Penambahan:')
console.log(arrayMatikaOptimized(2, '+', -3));
console.log(arrayMatikaOptimized(2, '+', 3));
console.log(arrayMatikaOptimized(-2, '+', -3));
console.log(arrayMatikaOptimized(-2, '+', 3));
console.log(arrayMatikaOptimized(-2, '+', 2));
console.log(arrayMatikaOptimized(2, '+', 0));
console.log('++Pengurangan:')
console.log(arrayMatikaOptimized(2, '-', -3));
console.log(arrayMatikaOptimized(2, '-', 3));
console.log(arrayMatikaOptimized(-2, '-', -3));
console.log(arrayMatikaOptimized(-2, '-', 3));
console.log(arrayMatikaOptimized(-2, '-', -2));
console.log(arrayMatikaOptimized(-2, '+', 0));