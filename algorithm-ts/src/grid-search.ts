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
    let result: boolean = false;
    const matchedSet = new Set<number>();
    const pxlen = P.length;
    const pylen = P[0].length;
    const glen = G.length;

    G.forEach((e, i) => {
        // console.log({ i, e }, e.search(p[0]));
        if ( e.search(p[0]) > 0) matchedSet.add(i);
    });

    for (const el of matchedSet.values()) {
        const mi: number[] = [];
        let isEq = false;
        for (let i = el, j = 0; i < (el + pxlen); i++, j++) {
            if (G[i]) { 
                const ie = G[i].search(P[j]);
                mi.push(ie);
                isEq = mi[0] === ie ? true : false;
                console.log(G[i], P[j])
            }
        }
        console.log('------', isEq && mi.length === pxlen);
    }

    // for (let i = 0; i < glen - pxlen; i++) {
    //     for (let j = i; j < pxlen+i; j++) {
    //         console.log(G[j].slice(0, pylen))
    //     }
    //     console.log('------')
    // }

    // console.log(matchedSet)
    return result ? 'YES' : 'NO'
}

let g: string[] = [];
let p: string[] = [];

g = [
    '7283455864',
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
    '3106'
]
console.log(gridSearch(g, p));
g = [
    '400453592126560',
    '114213133098692',
    '474386082879648',
    '522356951189169',
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
// console.log(gridSearch(g, p));