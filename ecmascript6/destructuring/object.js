/**
 * Destructuring Assigment
 * Object matching, shorthand notation
 * Intuitive and flexible destructuring of Objects into individual variables during assignment.
 * http://es6-features.org/#ObjectMatchingShorthandNotation
 */
const obj = {
    id: 1, name: 'Agus', address: 'Jakarta', married: true
};

const { name, address } = obj
const { name, address: { city: 'Jakarta', country: 'Indonesia'} } = obj

console.log({obj},  { name, address });