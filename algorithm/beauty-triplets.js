/**
 * https://www.hackerrank.com/challenges/beautiful-triplets/problem
 * 
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    // Write your code here
    // console.time('log')
    let countTrip = 0;
    arr.forEach((a, i) => {
        //console.log(`${i}${a}>`)
        //console.log(i, '....', arr[i + 1] - a)
        if (arr[i + 1] - a <= d) { 
            let cnt = 0;
            let tempA = a;

            for (const b of arr.slice(i + 1)) { 
                // console.log('------------------', i)
                if ((b - tempA) > d) break;
                else if ((b - tempA) === d) { 
                    // console.log('------------------', cnt)
                    tempA = b;
                    cnt++;
                    if (cnt === 2) { 
                        countTrip++;
                        // console.log('xxxxxxxxxxxxxxxxxx', cnt)
                        break;
                    }
                }
            }
            //console.log('....', cnt)
        }
    });
    // console.timeLog('log');
    return countTrip;
}

// Code Driven
console.log(beautifulTriplets(1, [2, 2, 3, 4, 5])); // 3
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // 3
console.log(beautifulTriplets(1, [1, 2, 3, 4, 5, 6, 7, 8])); // 6
console.log(beautifulTriplets(2, [1, 2, 3, 4, 5, 6, 7, 8])); // 4
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19])); // 2
console.log(beautifulTriplets(2, [1, 6, 8, 9, 9, 10, 12, 13, 14, 19])); // 3