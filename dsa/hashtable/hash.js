/**
 * Hashtable
 * Unordered associative array
 * Hashing is a popular technique used for storing and retrieving data as fast as possible. 
 * The main reason behind using hashing is that it performs insertion, deletion, searching, and other operations 
 * 
 * Time complexity in in big O notation
 * ---------------------------------------
 * Algorithm    | Average   | Worst Case
 * ---------------------------------------
 * Space        | O(n)[1]   | O(n)
 * Search       | O(1)      | O(n)
 * Insert       | O(1)      | O(n)
 * Delete       | O(1)      | O(n)
 */

// Simple Hashtable
const hash = (string, max) => { 
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

function Hashtable () { 
    let storage = new Array();
    const storageLimit = 6;

    this.peek = () => { 
        return (storage);
    };

    this.add = (key, value) => { 
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else { 
            let inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    inserted = true;
                    storage[index][i][1] = value;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = (key) => { 
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return;
        }
        if (storage[index].length === 1 &&
            storage[index][0][0] === key) {
            delete storage[index];
        } else { 
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i] === undefined) {
                    return;
                }
                 if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
             }
        }
    };

    this.lookup = (key) => {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else { 
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i] === undefined) {
                    return undefined
                }
                if (storage[index][i][0] === key) {
                   return storage[index][i][1];
               }
            }
        }
    };
};

// Drive code
console.log(hash('beau', 4));
console.log(hash('john', 4));
const h = new Hashtable();
h.add('beau', 'person');
h.add('fido', 'dog');
h.add('rex', 'dino');
h.add('tux', 'penguin');
h.add('tux2', 'penguin');
h.add('tux3', 'penguin');
h.add('tux4', 'penguin');
h.add('tux5', 'penguin');
console.log(h.peek());
console.log(h.lookup('fido'));
h.remove('fido');
h.remove('fido');
console.log(h.peek());
console.log(h.lookup('fido'));