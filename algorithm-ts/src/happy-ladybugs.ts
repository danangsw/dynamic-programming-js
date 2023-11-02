/**
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 * 
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING 'YES' or 'NO'.
 * The function accepts STRING b as parameter.
 * string b: the initial positions and colors of the ladybugs
 */

function happyLadybugs(b: string): string {
    // Write your code here
    const mapBug = new Map();

    b.split('').forEach(e => {
        let index = b.indexOf(e);
        const indexes:number[] = []
        while (index !== -1) {
            indexes.push(index)
            mapBug.set(e, indexes);

            index = b.indexOf(e, index + 1);
        }
    });
    
    console.log(mapBug);
    

    let isHappy = false;
    mapBug.forEach((v, k) => {
        if (k === '_' && v.length > 0) isHappy = true;
        if (k !== '_' && v > 1) isHappy = true;
        else isHappy = false
    })
    
    // const hasBuffer = b.indexOf('_') > -1;
    // const countBuffer = b.matchAll(/\b_\b/g);
    // b.split('').forEach(e => { 
        
    // });

    return isHappy ? 'YES' : 'NO';
}

// Drive code
console.log(happyLadybugs('RBY_YBR'));      // YES
console.log(happyLadybugs('X_Y__X'));       // NO
console.log(happyLadybugs('__'));           // YES
console.log(happyLadybugs('B_RRBR'));       // YES
console.log(happyLadybugs('AABBC'));        // NO
console.log(happyLadybugs('AABBC_C'));      // YES
console.log(happyLadybugs('_'));            // YES
console.log(happyLadybugs('DD__FQ_QQF'));   // YES
console.log(happyLadybugs('AABCBC'));       // NO
