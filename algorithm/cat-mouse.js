/**
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 * Complete the catAndMouse function below.
 * If cat  catches the mouse first, print 'Cat A'.
 * If cat  catches the mouse first, print'Cat B'.
 * If both cats reach the mouse at the same time, print 'Mouse C' as the two cats fight and mouse escapes.
 */

function catAndMouse(a, b, c) {
    return (Math.abs(c - a) < Math.abs(c - b)) ? "Cat A" :
        (Math.abs(c - a) > Math.abs(c - b)) ? "Cat B" :
        "Mouse C";
}

// Drive code
console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C
console.log(catAndMouse(2, 5, 3)); // Cat A