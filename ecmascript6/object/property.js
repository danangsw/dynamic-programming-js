/**
 * Enhanced Pbject Properties
 * Computed Property Names
 * Support for computed names in object property definitions
 * http://es6-features.org/#ComputedPropertyNames
 */

function quux() {
    return 'quux'
}

let obj = {
    foo: 'bar',
    ["baz" + quux()]: 45
};

console.log({obj})