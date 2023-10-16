/**
 * Extended Parameter Handling
 * Default Parameter Values
 * http://es6-features.org/#DefaultParameterValues
 */

function f(x, y = 7, z = 43) { 
    return x + y + z;
}

console.log(f(1));