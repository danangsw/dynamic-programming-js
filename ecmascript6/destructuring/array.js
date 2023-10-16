/**
 * Destructuring Assignment
 * Array Matching
 * Intuitive and flexible destructuring of Arrays into individual variables during assignment.
 * http://es6-features.org/#ArrayMatching
 */

var list = [1, 2, 3, 4];
var [a, c, b] = list;
[b, a] = [a, b];

console.log(list, [a,c,b], [b, a]);