/**
 * 10 essential one iners worth using in virtually every javascript project
 */

// 1. How to Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
let str = 'javascript'
console.log(`1. How to Capitalize Text`)
console.log(str, capitalize(str));