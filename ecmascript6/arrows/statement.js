/**
 * Arrow Functions
 * Statement Bodies
 * More expressive closure syntax
 * http://es6-features.org/#StatementBodies
 */

const evens = [2, 4, 6, 8, 10];
let sixes = [];
evens.forEach(v => { 
    if (v % 4 === 0) {
        sixes.push(v)
    }
});

console.log(evens, sixes);