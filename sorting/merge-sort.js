/**
 * Merge Sort Algorithm
 */

/**
 * Sorts a list in ascending order
 * Returns a new sorted list
 * 
 * Divide: find the midpoint of the list and divide into sublist
 * Conquer: recursively sort the sublists created in prev step
 * Combine: merge the sorted sublists created in prev step
 * 
 * Takes overall O(n log n) time
 * Linear Space Complexity
 * @param {*} list 
 */

function mergeSort(list = []) { 
    if (list.length <= 1)
        return list;

    const devidedList = splitList(list);

    const leftList = mergeSort(devidedList.left);
    const rightList = mergeSort(devidedList.right);

    return mergeSortList(leftList, rightList);
}

/**
 * Devide the unsorted list at midpoint into sublists
 * Returns two sublist - left & right
 * 
 * Takes O(log n) times
 * @param {*} list 
 */
function splitList(list = []) { 
    const len = list.length;
    let leftList = [];
    let rightList = [];

    let mid = Math.floor(list.length / 2);

    list.forEach((e, i) => {
        if (i >= 0 && i < mid) leftList.push(e);
        else if (i >= mid && i < len) rightList.push(e);
    });

    return { left: leftList, right: rightList };
}

/**
 * Merge two list and sorting 
 * Return a new merged list
 * 
 * Runs overall O(n) time
 * @param {*} param0 
 */
function mergeSortList(left, right) { 
    let list = [];
    let i = 0; // start index of left
    let j = 0; // start index of right

    while (i < left.length && j < right.length) { 
        if (left[i] < right[j]) {
            list.push(left[i++]);
        } else { 
            list.push(right[j++]);
        }
    }

    while (i < left.length) { 
        list.push(left[i++]);
    }

    while (j < right.length) { 
        list.push(right[j++]);
    }

    return list;
}

function verifySorted(list) { 
    const len = list.length;

    if ((len <= 1) || (list[0] < list[1])) {
        return true;
    }

    return verifySorted(list.slice(1));
}

// Drive code
const ls = [5, 7, 1, 2, 9, 6, 8, 3, 4, 11, 10, 15, 14, 13, 12];
const lss = mergeSort(ls);
console.log(ls, verifySorted(ls));
console.log(lss, verifySorted(lss));