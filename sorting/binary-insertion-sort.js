function binarySearch(arr, val, start, end) {
    if (start === end) {
        if (arr[start] > val) return start;
        else return start + 1;
    }
    if (start > end) return start;
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
    else if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
    return mid;
}

function binaryInsertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var val = arr[i];
        var j = i - 1;
        var pos = binarySearch(arr, val, 0, j);
        while (j >= pos) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = val;
    }
    return arr;
}

var arr = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54];
console.log("Before sorting: " + arr);
binaryInsertionSort(arr);
console.log("After sorting: " + arr);
