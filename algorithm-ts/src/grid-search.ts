/**
 * https://www.hackerrank.com/challenges/the-grid-search/problem
 * 
 * Complete the gridSearch function in the editor below. 
 * It should return YES if the pattern exists in the grid, or NO otherwise.
 * gridSearch has the following parameter(s):
 *  string G[R]: the grid to search
 *  string P[r]: the pattern to search for
 */

function gridSearch(G: string[], P: string[]): string {
    // Write your code here
    const pxlen = P.length;

    for (let i = 0; i < G.length; i++) {
        const el = G[i];

        if (el.search(P[0]) === -1) continue;

        const mapMi = new Map<number, number>();
        for (let j = i, k = 0; j < (i + pxlen); j++, k++) {
            if (!G[j]) break;
            
            let index = G[j].indexOf(P[k]);
            while (index !== -1) {
                mapMi.set(index, mapMi.has(index) ? (mapMi.get(index) as number + 1) : 1);
                if (mapMi.get(index) === pxlen) { 
                    return "YES";
                }

                index = G[j].indexOf(P[k], index + 1);
            }
        }
    }

    return "NO";
}

let g: string[] = [];
let p: string[] = [];

g = [
    '9505455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '2229505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137',
    '4607929505'
]
p = [
    '9505',
    '3845',
    '3530',
    '3100'
]
console.log(gridSearch(g, p)); // NO
g = [
    '400453592126599',
    '994213133098692',
    '984386099879699',
    '522356990189199',
    '887109450487496',
    '252802633388782',
    '502771484966748',
    '075975207693780',
    '511799789562806',
    '404007454272504',
    '549043809916080',
    '962410809534811',
    '445893523733475',
    '768705303214174',
    '650629270887160'
]
p = [
    '99',
    '99'
]
console.log(gridSearch(g, p)); // YES