/**
 * Given sorted array, write a function that returns the index for the given
 * nums = [1,3,5,7,9,11,13]
 * target = 8
 */

//let numbers = [1, 3, 5, 7, 9, 11, 13];
let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197];


const binSearch = (arrays, target, start, end) => { 
    if (start >= end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (arrays[mid] === target)
        return mid;
    if (arrays[start] === target)
        return start;
    if (arrays[end] === target)
        return end;

    if (arrays[mid] > target)
        return binSearch(arrays, target, start, mid - 1);
    if (arrays[mid] < target)
        return binSearch(arrays, target, mid + 1, end);
};

const findArrayIndex = (array, target) => { 
    return binSearch(array, target, 0, array.length - 1);
}

// Drive code
console.log(`Found in: ${findArrayIndex(numbers, 37)}`);
console.log(`Found in: ${findArrayIndex(numbers, 4)}`);
console.log(`Found in: ${findArrayIndex(numbers, 1)}`);
console.log(`Found in: ${findArrayIndex(numbers, 13)}`);
console.log(`Found in: ${findArrayIndex(numbers, 0)}`);

let i = 0;
for (const iterator of numbers) {
    const j = findArrayIndex(numbers, iterator);
    console.log(iterator, j, i, j === i)
    i++;
}