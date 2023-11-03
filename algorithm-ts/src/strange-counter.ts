/**
 * https://www.hackerrank.com/challenges/strange-code/problem
 * 
 * Function Description
 * Complete the strangeCounter function in the editor below.
 * strangeCounter has the following parameter(s):
 * int t: a LONG_INTEGER parameter
 * 
 * Returns
 * int: the LONG_INTEGER value displayed at time 
 */

function strangeCounter(t: number): number {
    // Write your code here
    let ti = 1;
    let vt = 3;
    let vr = 0;

    while (vr <= 0) {
        vr = vt - (t - ti);

        ti = ti + vt;
        vt = 2 * vt;
    }

    return vr;
}

console.log(strangeCounter(1)); // output 3
console.log(strangeCounter(2)); // output 2
console.log(strangeCounter(3)); // output 1
console.log(strangeCounter(4)); // output 6
console.log(strangeCounter(17)); // output 5
console.log(strangeCounter(1000000)) // output 572862