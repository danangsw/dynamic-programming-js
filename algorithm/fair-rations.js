/**
 * https://www.hackerrank.com/challenges/fair-rations/problem
 * 
 * Complete the fairRations function in the editor below.
 * fairRations has the following parameter(s):
 * int B[N]: the numbers of loaves each persons starts with
 * 
 * Returns
 * string: the minimum number of loaves required, cast as a string, or 'NO'
 *
 */

function fairRations(b) {
    // Write your code here
    let cb = 0;
    // console.log({ b });
    for (let i = 0; i < b.length - 1; i++) { 
        if ((b[i] + 1) % 2 === 0){ 
            b[i]++;
            b[i + 1]++;
            cb += 2;
        }
    }
    // console.log({ B:b[b.length - 1], cb });
    return (b[b.length - 1] + cb) % 2 === 0 ? cb.toString() : "NO";
}

//. Code driven
console.log(fairRations([1, 2])); // NO
console.log(fairRations([2, 3, 4, 5, 6])); // 4
console.log(fairRations([4, 5, 6, 7])); // 4
console.log(fairRations([1, 2, 3, 4, 5, 6, 7])); // 8
console.log(fairRations([1, 2, 3, 4, 5, 6])); // NO
