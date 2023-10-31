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
    let page = 1, chapter = 1;

    for (const prob of arr) {
        // console.log('CHAPTER', chapter);
        const p = Math.floor(prob / k); // page in chapter
        const lp = prob % k === 0 ? 0 : 1; // last page in chapter
        const tp = (p + lp); // total page

        let pr = 1;
        for (let i = 0; i < tp; i++) { 
            // console.log('   PAGE', page);
            while (pr <= prob) {
                if (pr === page) spage++;
                
                // console.log('       -', pr);
                if (pr % k === 0) break;
                pr++;
            }
            pr++;
            page++;
        }
        chapter++;
    }

    return spage;
}

// Drive code
console.log(workbook(3, [4, 2, 6, 1, 10])); // 4;
console.log(workbook(5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])) // 8;