/**
 * Destructuring Assignment
 * Parameter Context Matching
 * Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
 * http://es6-features.org/#ParameterContextMatching
 */

function f([name, val]) {
    console.log(name, val);    
}
function g({name:n, val:v}) { 
    console.log(n, v)
}
function h({name, val, mar}) { 
    console.log(name, val)
}

f(["boss", 43, true]);
g({ name: 'bazz', val: 45 });
h({ name: 'buzz', val: 46, mar: true });