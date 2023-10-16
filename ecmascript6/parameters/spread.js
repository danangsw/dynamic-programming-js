/**
 * Extended Parameter Handling
 * Spread Operator
 * Spreading of elements of an iterable collection (like an array or even a string)
 * into both literal elements and individual function parameters
 * http://es6-features.org/#SpreadOperator
 */

let params = ['hi', true, 1];
let others = [10, 20, ...params];
console.log({ params, others });

let str = 'welcome';
var chars = [...str];
console.log({str, chars});