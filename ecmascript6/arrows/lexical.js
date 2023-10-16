/**
 * Arrows Functions
 * Lexical this
 * More intuitive handling of current object context
 * http://es6-features.org/#Lexicalthis
 */

class Test { 
    evens = [2, 4, 6, 8, 10];
    fixes = [];
    constructor() { 
        this.evens.forEach(v => {
            this.fixes.push(v);
            console.log(v, this.fixes);
        });
    }  
}

const t = new Test();
