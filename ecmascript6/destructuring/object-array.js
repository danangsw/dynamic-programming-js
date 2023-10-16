/**
 * Destructuring Assignment
 * Object And Array Matching, Default Values
 * Simple and intuitive default values for destructuring of Objects and Arrays.
 * http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
 */

var obj = { a: 1 };
var list = [ 1 ]
var { a, b = 2 } = obj
var  [x, y = 2] = list;

console.log({obj, list}, { a, b}, [x,y]);