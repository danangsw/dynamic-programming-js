/**
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 * 
 * Complete the workbook function in the editor below.
 * workbook has the following parameter(s):
 * int n: the number of chapters
 * int k: the maximum number of problems per page
 * int arr[n]: the number of problems in each chapter
 * 
 * Returns
 * int: the number of special problems in the workbook
 */

function workbook(k, arr) {
    // Write your code here
    let spage = 0;
    let page = 1;

    for (const prob of arr) {
        let pr = 1;
        while (pr <= prob) {
            // console.log(page, pr);
            
            if (pr === page) spage++;

            if (pr % k === 0 && (pr + 1) <= prob) { 
                page++;
                // console.log('--------')
            }

            pr++;
        }
        page++;
        // console.log('--------')
    }

    return spage;
}

// Drive code
console.log(workbook(3, [4, 2, 6, 1, 10])); // 4;
console.log(workbook(5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])) // 8;