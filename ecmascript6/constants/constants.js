/**
 * Constants
 * Support for constants (also known ad "immutable variables"), i.e, variables which cannot be reassigned new value.
 * Notice: this only makes the varible itself immutable, not its assigned content.
 * http://es6-features.org/#Constants
 */

const PI = 3.141593;
const anObj = {};
const items = [];

anObj.id = 1;       // OK
anObj.name = 'A';   // OK

items.push(1);       // OK
items.push(2);       // OK

// items = [1,2,3] // error runtime: Assignment to constant variable.
// anObj = {id: 2, name: 'B'}  // error runtime: Assignment to constant variable.
// PI = 3.14; // error runtime: Assignment to constant variable.
