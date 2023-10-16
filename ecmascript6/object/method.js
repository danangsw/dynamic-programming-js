/**
 * enhanced object properties
 * method properties
 * support for method notation in object property definitions,
 * for both regular functions and generator functions
 */

const obj = {
    x:1,
    y:2,
    z:'a',
    foo(a, b) { },
    bar(x, y) { },
    *guux(i, j) { }
};

console.log(obj);