/**
 * Scoping
 * Block-scoped Variables
 * Block-scoped variables (and constants) without hoisting
 * http://es6-features.org/#BlockScopedFunctions
 */

for (let i = 0; i < 10; i++) { 
    // code here
    let x = i + 1;
    console.log(i, x);
}

for (let i = 0; i < 20; i++) { 
    // code here
    let y = i + 2;
    console.log(i, y);
}

let callbacks = [];
for (let i = 0; i <=2; i++) { 
    callbacks[i] = function () { return i * 2};
}

console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)