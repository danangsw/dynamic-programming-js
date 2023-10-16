/**
 * Destruncturing Assignment
 * Fail-Soft Destructuring
 * Fail-soft destructuring, optionally with default
 * http://es6-features.org/#FailSoftDestructuring
 */

var list = [7, 42];
var [a = 1, b = 2, c = 3, d] = list;
var [x, y, z = 0] = list;
console.log({ a, b, c, d, x, y, z});
