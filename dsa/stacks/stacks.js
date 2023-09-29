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

