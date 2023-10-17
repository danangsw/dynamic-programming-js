/**
 * Promises
 * Promise Usage
 * First class representation of a value that may be made asynchronously and be available in the future.
 * http://es6-features.org/#PromiseUsage
*/

function msgAfterTimeout(msg, who, timeout) { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
let timea = 1000, timeb = 2000
msgAfterTimeout("", "Foo", timea).then((msg) => 
    msgAfterTimeout(msg, "Bar", timeb)
).then((msg) => { 
    console.log(`done after ${timea + timeb}: ${msg}`)
});

/**
 * Promises
 * Promise Combination
 * Combine one or more promises into new promises without having to take care of ordering of the underlying asynchronous operations yourself.
 * http://es6-features.org/#PromiseCombination
 */

Promise.all([
    msgAfterTimeout('01', 'Foo', 500),
    msgAfterTimeout('02', 'Bar', 500),
    msgAfterTimeout('03', 'Cuz', 500),
    msgAfterTimeout('04', 'Dor', 500),
]).then((data) => { 
    let [a, b, c, d] = data
    console.log(`Success: ${a}`)
    console.log(`Success: ${b}`)
    console.log(`Success: ${c}`)
    console.log(`Success: ${d}`)
}, (err) => { 
    console.log(`Error: ${err}`)
})