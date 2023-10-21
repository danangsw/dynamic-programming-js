/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 * The 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d - equal to the length of segment
 *  3. INTEGER m - equal to the bar length
 */

function birthdayBar(s, d, m) {
    // Write your code here
    if (s.length === m) { 
        return s.reduce((a, b) => a + b) === d ? 1 : 0;
    }
    if (s.length < m) return 0;

    let res = 0;
    for (let i = 1; i < s.length; i++)
    {
        const suma = s.slice(i - 1, i + (m - 1));
        const sumd = suma?.reduce((a, b) => a + b);
        //console.log({suma, sumd})
        if (sumd === d) res++;
    }
    return res;
}

console.log(birthdayBar([4], 4, 1), "\n"); // Output: 1
console.log(birthdayBar([1,1,1,1,1,1], 3, 2), "\n"); // Output: 0
console.log(birthdayBar([1, 2, 1, 3, 2], 3, 2), "\n"); // Output: 2
console.log(birthdayBar([2,3,4,4,2,1,2,5,3,4,4,3,4,1,3,5,4,5,3,1,1,5,4,3,5,3,5,3,4,4,2,4,5,2,3,2,5,3,4,2,4,3,3,4,3,5,2,5,1,3,1,4,2,2,4,3,3,3,3,4,1,1,4,3,1,5,2,5,1,3,5,4,3,3,1,5,3,3,3,4,5,2], 26, 8), "\n"); // Output: 16
