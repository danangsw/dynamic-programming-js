/**
 * Destructuring Assigment
 * Object matching, shorthand notation
 * Intuitive and flexible destructuring of Objects into individual variables during assignment.
 * http://es6-features.org/#ObjectMatchingDeepMatching
 */
const obj = {
    id: 1, name: 'Agus', city: 'Jakarta', married: true, country: 'Indonesia', address: ''
};

const { name, city} = obj

console.log({obj},  { name, city });