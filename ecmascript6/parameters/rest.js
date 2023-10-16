/**
 * Extended Parameter Handling
 * Rest Parameter Values
 * http://es6-features.org/#RestParameter
 */

function f(x, y, ...z) { 
    console.log(x, y, z);
    return (x + y) * z.length;
}

console.log(f(1,2,'a', 'b', 3, 4, 5, 6));
