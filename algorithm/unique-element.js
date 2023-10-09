function genRandomNumbers(start, end, len) { 
    let results = [];
    let list = [];

    for (let i = start; i <= end; i++) {
        list.push(i);
    }

    while (len-- > 0) { 
        results.push(list[Math.floor(Math.random() * len * 1)]);
    }

    return results;
}

function getUnique(list) { 
    let set = new Set();
    let objs = {};
    let result = [];
    const sorted = list.sort();

    sorted.forEach(element => {
        if (set.has(element))
             objs[element] += 1;
        else {
            set.add(element)
            objs[element] = 1;
        }
    });

    Object.keys(objs).forEach(element => {
        if (result.length >= 2)
            return result;
        
        if (objs[element] < 2) {
            result.push(parseInt(element));
        }
    });

    return result;
}

const nums = genRandomNumbers(1, 100, 20);
console.log(nums);
console.log(getUnique([
  15, 15,  2, 2, 9, 5, 4,
   5, 11, 10, 9, 4, 7, 6,
   3,  3,  1, 2, 1, 1, 7, 10, 11
]));

console.log(getUnique([]));
console.log(getUnique([1,1]));
console.log(getUnique([1]));
console.log(getUnique([1,2]));