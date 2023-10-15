/**
 * 10 essential one iners worth using in virtually every javascript project
 */

// 1. How to Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
const str = 'javascript'
console.log(`1. How to Capitalize Text`)
console.log(str, capitalize(str));

// 2. How to Calculate Percent
const percent = (value, total) => Math.round((value / total) * 100);
const numbers = [10, 100]
console.log(`2. How to Calculate Percent`);
console.log({ numbers }, percent(numbers[0], numbers[1]));

// 3. How to Get a Random Element
const getRandomItems = (items) => items[Math.floor(Math.random() * items.length)];
const items = ["Nicely done!", "Good job!", "Good work!", "Correct!", 100, 200, 300];
console.log("3. How to Get a Random Element");
console.log(getRandomItems(items));

// 4. How to Remove the Duplicate Elements
const removeDuplicates = (items) => [...new Set(items)];
const items2 = ["Nicely done!", "Good job!", "Good work!", "Correct!", 100, 200, 300,
    "Nicely done!", "Good job!", "Good work!", "Correct!", 100, 200, 300,
    "Nicely done!", "Good job!", "Good work!", "Correct!", 100, 200, 300];
console.log("4. How to Remove the Duplicate Elements");
console.log(removeDuplicates(items2));

// 5. How to Sort Elements By Certain Property
const sortBy = (items, key) => items.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
const objects = [{ id: 1, name: 'agus' },
    { id: 4, name: 'cono' },
    { id: 3, name: 'boco' },
    { id: 2, name: 'dono' }];
console.log("5. How to Sort Elements By Certain Property");
console.log(sortBy(objects, 'id'));

// 6. How to Check if Arrays/Objects are Equal
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log("6. How to Check if Arrays/Objects are Equal");
console.log(isEqual(items, removeDuplicates(items2)));
console.log(isEqual({ id: 4, name: 'cono' }, { id: 2, name: 'dono' }));
console.log(isEqual({ id: 4, name: 'cono' }, { name: 'cono', id: 4 }));
console.log(isEqual({ id: 4, name: 'cono' }, { id: 4, name: 'cono' }));

// 7. How to Count Number of Occurrences
const countOccurences = (items, value) => items.reduce((prev, curr) => (curr === value ? prev + 1 : prev), 0);
console.log("7. How to Count Number of Occurrences");
console.log(countOccurences(items2, 100));
console.log(countOccurences(items2, "Correct!"));
console.log(countOccurences(items2, "xxx!"));

// 8. How to Wait for a Certain Amount of Time
const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ms = 2000;
console.log("8. How to Wait for a Certain Amount of Time");
console.log(`Waiting for ${ms}ms`);
wait(ms).then(() => console.log(`Display after ${ms}ms`));

// 9. How to Use the Pluck Property from Array of Objects
const pluck = (items, key) => items.map((obj) => obj[key])
console.log("9. How to Use the Pluck Property from Array of Objects");
console.log(pluck(objects, 'id'));
console.log(pluck(objects, 'name'));
console.log(pluck(objects, 'skill'));

// 10. How to Insert an Element at a Certain Position
const insertAt = (items, index, value) => [...items.slice(0, index), value, ...items.slice(index)];
const items3 = ['a', 'b', 'd', 'e'];
console.log("10. How to Insert an Element at a Certain Position");
console.log(insertAt(items3, 2, 'c'));
console.log(insertAt(insertAt(items3, 2, 'c'), 5, 'f'));
console.log(insertAt(insertAt(insertAt(items3, 2, 'c'), 5, 'f'), 0, 0));