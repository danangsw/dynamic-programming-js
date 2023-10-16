/**
 * Extended Literals
 * Binary & Octal Literals
 * Direct support for safe binary and octal literals
 */

const bin = 0b111110111 === 503; // parseInt("111110111", 2) === 503;
const oct = 0o767 === 503; // parseInt("767", 8) === 503;

console.log({ bin, oct });