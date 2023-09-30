/**
 * Sets
 * Set in JavaScript is a collection of items that are unique i.e no element can be repeated.
 * Set in ES6 are ordered: elements of the set can be iterated in the insertion order.
 * A set can store any type of value whether primitive or objects.
 */

// ES6 Set
let sets = new Set([4,4,3,3,2,2,1,1,0,0,'A','B','C']);

console.log(sets); // Set(4) { 1, 2, 3, 4 } -- Only unique values
sets.forEach((e, i) => {
    console.log(e, i);
});

sets.add(10);
sets.add(20);
sets.add(30);

console.log(sets);
console.log(sets, sets.has(10), sets.delete(10)); // delete value and return boolean: true true
console.log(sets, sets.has(10), sets.delete(10)); // delete value and return boolean: false false

for (const iterator of sets.values()) {
    console.log(iterator);
}

sets.delete('A');
sets.delete('B');
sets.delete('C');

console.log("Minimum element: " + Math.min(...sets));
console.log("Maximum element: " + Math.max(...sets));
console.log("Size of the set is: " + sets.size); // Printing the size of the set