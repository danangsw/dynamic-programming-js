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
                    results = [...results, start++];
                    limit--;
                }
            } else { 
                // Penambahan bilangan negatif
                while (limit <= 0) {
                    // geser kiri sebanyak n limit
                    results = [start--, ...results];
                    limit++;
                }
            }
            break;
        case '-':
            if (limit > 0) {
                // Pengurangan bilangan positif
                while (limit >= 0) {
                    // geser kiri sebanyak n limit
                    results = [start--, ...results];
                    limit--;
                }
            } else { 
                // Pengurangan bilangan negatif
                while (limit <= 0) {
                    // geser kanan sebanyak n limit
                    results = [...results, start++];
                    limit++;
                }
            }
            break;
        default:
            break;
    }

    return results;
};
 
console.log('Penambahan:')
console.log(arrayMatika(2, '+', -3));
console.log(arrayMatika(2, '+', 3));
console.log(arrayMatika(-2, '+', -3));
console.log(arrayMatika(-2, '+', 3));
console.log('Pengurangan:')
console.log(arrayMatika(2, '-', -3));
console.log(arrayMatika(2, '-', 3));
console.log(arrayMatika(-2, '-', -3));
console.log(arrayMatika(-2, '-', 3));
