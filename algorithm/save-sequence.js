/**
 * https://www.hackerrank.com/challenges/permutation-equation/problem
 * 
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    return p.map((_, i) => { 
        let fi = p.indexOf(i + 1) + 1;
        return (p.indexOf(fi) + 1);
    })
}

// Drive code
console.log(permutationEquation([2, 3, 1])); // output: [2,3,1]
console.log(permutationEquation([5,2,1,3,4])); // output: [4,2,5,1,3]