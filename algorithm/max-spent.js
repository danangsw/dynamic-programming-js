/**
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 * 
 * Complete the getMoneySpent function below.
 * @param {*} keyboards - int arrays 
 * @param {*} drives - int arrays
 * @param {*} b - max budget
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    return keyboards.reduce((max, kcv) => {
        return drives.reduce((maxt, dcv) => {
            let tot = kcv + dcv;
            return maxt = (tot >= maxt && tot <= b) ? tot : maxt;
        }, max);
    }, -1);
}

// Drive code
console.log(getMoneySpent([4], [5], 1)); // Output -1
console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // Output 9
console.log(getMoneySpent([40, 50, 60], [5,8,12], 60)) // Output 58