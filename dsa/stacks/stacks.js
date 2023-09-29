/**
 * Stack
 * An element gets added to the top of the stack and only the element on the top may be removed. 
 * This is an example of an array implementation of Stack. So an element can only be added/removed from the end of the array.
 */ 

// Functions: push, pop, peek, view, length

const palindrome = (word) => { 
    var letters = []; //this our stack

    //var word = "racecar"; //this is palindrome word

    var rword = "";

    // put letters of word into stack
    for (var i = 0; i < word.length; i++) { 
        letters.push(word[i]);
    }

    // pop out letters of word from stack
    for (var i = 0; i < word.length; i++) {
        rword += letters.pop();
    }

    if (rword === word) { 
        console.log(`${word} is palindrome.`);
    }
    else { 
        console.log(`${word} is not palindrome.`);
    }
};

palindrome('letter');

//Creates a stack
function Stack () { 
    this.count = 0;
    this.storage = {};

    //Add value into the stack
    this.push = (value) => { 
        this.storage[this.count++] = value;
    }

    //Remove and return the value at the end of the stack
    this.pop = () => { 
        if (this.count === 0) { 
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = () => { 
        return this.count;
    }
    
    //Return the value at end of the stack (without pop out it)
    this.peek = () => { 
        if (this.count === 0)
            return undefined;
        return this.storage[this.count-1];
    };

    this.list = () => { 
        return this.storage;
    };
}

var stacks = new Stack();
console.log(stacks.size());
console.log(stacks.peek());
console.log(stacks.list());
stacks.push(1);
stacks.push(2);
stacks.push('A');
stacks.push('B');
console.log(stacks.size());
console.log(stacks.peek());
console.log(stacks.list());
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();
stacks.pop();
console.log(stacks.size());
console.log(stacks.peek());
console.log(stacks.list());