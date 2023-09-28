const binarySearch = (arrays, target, left, right) => {
    if (left > right) {
        return left;
    }

    if (left === right) { 
        return (arrays[left] > target) ? left : left + 1;
    }

    const mid = Math.floor((right + left) / 2);

    if (arrays[mid] > target) {
        return binarySearch(arrays, target, left, mid - 1);
    }
        
    if (arrays[mid] < target) {
        return binarySearch(arrays, target,  mid + 1, right);
    }
        

    return mid;
}

const binaryInsertionSort = (arrays) => {
    for (let i = 1; i < arrays.length; i++) {
        let right = i - 1;
        let target = arrays[i];
        let pos = binarySearch(arrays, target, 0, right);
    
        console.log(i, target, right, pos, arrays);
        while (pos <= right) {
            arrays[right + 1] = arrays[right];
            right--;
        }

        arrays[pos] = target;
        console.log(i, target, right, pos, arrays);
    }
    return arrays;
}

//var arr = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54];
var arr = [8,7,3,4,5,6,1,2];
console.log("Before sorting: " + arr);
binaryInsertionSort(arr);
console.log("After sorting: " + arr);
