/**
 * https://www.hackerrank.com/challenges/sparse-arrays/problem
 * 
 * Complete the function matchingStrings in the editor below. 
 * The function must return an array of integers representing 
 * the frequency of occurrence of each query string in stringList.
 * 
 * matchingStrings has the following parameters:
 * - string stringList[n] - an array of strings to search
 * - string queries[q] - an array of query strings
 * 
 * Returns
 * int[q]: an array of results for each query
 */


function matchingStrings(stringList: string[], queries: string[]): number[] {
    // Write your code here
    const res: number[] = [];
    const strMap: Map<string, number> = new Map();
    
    for (const item of stringList) {
        let iv: number = strMap.get(item) as number;
        strMap.set(item, (iv ? iv + 1 : 1));
    }

    for (const item of queries) { 
        const iv: number = strMap.get(item) as number;
        res.push(iv ? iv : 0);
    }
    // console.log({ strMap, res });
    return res;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])); // [2, 1, 0]
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])); // [1, 0, 1]
console.log(matchingStrings(['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'], ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'])); // [1, 3, 4, 3, 2]
