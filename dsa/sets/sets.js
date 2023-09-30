/**
 * Sets
 * Set in JavaScript is a collection of items that are unique i.e no element can be repeated.
 * Set in ES6 are ordered: elements of the set can be iterated in the insertion order.
 * A set can store any type of value whether primitive or objects.
 */

// Custom Sets
function Sets(list = []) { 
    // collection will hold the set
    let collection = [];

    // this method will check the presence of an element and return true or false
    this.has = (element) => {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the collection
    this.values = () => { 
        return collection;
    };
    // this method will add an element to the set
    this.add = (element) => {
        if (this.has(element))
            return false;
        
        collection.push(element);
        return true;
    };
    // this method will remove an element from a set
    this.delete = (element) => { 
        if (!this.has(element))
            return false;

        const index = collection.indexOf(element);
        collection.splice(index, 1);

        return true;
    };
    // this method will return the size of the collection
    this.size = () => { 
        return collection.length;
    };

    // Set initial value list from main functions list parameter to collection variable
    list.forEach(element => {
        this.add(element);
    });
}

let mySets = new Sets([1,0,0,4,4,3,3,2,2,1,1,0,0,'A','B','C']);

console.log(mySets.values()); // Set(4) { 1, 2, 3, 4 } -- Only unique values

mySets.add(10);
mySets.add(20);
mySets.add(30);

console.log(mySets.values());
console.log(mySets.values(), mySets.has(10), mySets.delete(10)); // delete value and return boolean: true true
console.log(mySets.values(), mySets.has(10), mySets.delete(10)); // delete value and return boolean: false false

for (const iterator of mySets.values()) {
    console.log(iterator);
}

mySets.delete('A');
mySets.delete('B');
mySets.delete('C');

console.log("Minimum element: " + Math.min(...mySets.values()));
console.log("Maximum element: " + Math.max(...mySets.values()));
console.log("Size of the set is: " + mySets.size()); // Printing the size of the set