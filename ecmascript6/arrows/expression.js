/**
 * Arrow Functions
 * Expression Bodies
 * More expressive closure syntax
 */

const evens = [2, 4, 6, 8, 10];
const odds = evens.map(v => v + 1);
const pairs = evens.map(v => ({ even: v, odd: v + 1 }));
const nums = evens.map((v, i) => v + i);

console.log(evens);
console.log(odds);
console.log(pairs);
console.log(nums);