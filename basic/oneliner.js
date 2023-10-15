/**
 * 10 essential one iners worth using in virtually every javascript project
 */

// 1. How to Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
const str = 'javascript'
console.log(`1. How to Capitalize Text`)
console.log(str, capitalize(str));

// 2. How to Calculate Percent
const percent = (value, total) => Math.round((value / total) * 100);
const numbers = [10, 100]
console.log(`2. How to Calculate Percent`);
console.log({ numbers }, percent(numbers[0], numbers[1]));
