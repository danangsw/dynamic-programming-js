/**
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 * 
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING 'YES' or 'NO'.
 * The function accepts STRING b as parameter.
 * string b: the initial positions and colors of the ladybugs
 */

function setMapBugs(b: string): Map<string, number[]> { 
    const mapBug = new Map<string, number[]>();
    // Generate map string index
    b.split('').forEach(e => {
        let index = b.indexOf(e);
        const indexes:number[] = []
        while (index !== -1) {
            indexes.push(index)
            mapBug.set(e, indexes);
            index = b.indexOf(e, index + 1);
        }
    });

    return mapBug;
}    
    
function happyLadybugs(b: string): string {
    // Write your code here
    let isHappy = true;
    // Validate any buffer "_"
    const hasBuffer = b.indexOf("_") < 0 ? false : true;
    const bSorted = b.split('').sort().join('');
    // Have no buffer "_"
    // Validate the origin
    // Have buffer "_"
    // Then sort the origin
    const mapBug = hasBuffer ? setMapBugs(bSorted) : setMapBugs(b);
    // Logic engine
    mapBug.forEach((v, k) => {
        if (!isHappy) { 
            return;
        }

        const vlen = v.length;
        const [max, min] = [Math.max(...v), Math.min(...v)];
        
        if (k !== '_' &&
            (vlen < 2 || (max - min) !== (vlen - 1))) {
            isHappy = false;
        }
    });

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
console.log(happyLadybugs('AABBCC'));       // YES
console.log(happyLadybugs('___BB'));        // YES
console.log(happyLadybugs('AB_______CD'));  // NO
