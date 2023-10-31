/**
 * https://www.hackerrank.com/challenges/the-time-in-words/problem
 * 
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h: the hour of the day
 *  2. INTEGER m: the minutes after the hour
 * 
 * Returns
 * string: a time string as described
 */

const HOURS = new Map();
HOURS.set(1, 'one');
HOURS.set(2, 'two');
HOURS.set(3, 'three');
HOURS.set(4, 'four');
HOURS.set(5, 'five');
HOURS.set(6, 'six');
HOURS.set(7, 'seven');
HOURS.set(8, 'eight');
HOURS.set(9, 'nine');
HOURS.set(10, 'ten');
HOURS.set(11, 'eleven');
HOURS.set(12, 'twelve');

const MINUTES = new Map();
MINUTES.set(0, "o' clock");
MINUTES.set(1, "one minute");
MINUTES.set(2, "two minutes");
MINUTES.set(3, "three minutes");
MINUTES.set(4, "four minutes");
MINUTES.set(5, "five minutes");
MINUTES.set(6, "six minutes");
MINUTES.set(7, "seven minutes");
MINUTES.set(8, "eight minutes");
MINUTES.set(9, "nine minutes");
MINUTES.set(10, "ten minutes");
MINUTES.set(11, "eleven minutes");
MINUTES.set(12, "twelve minutes");
MINUTES.set(13, "thirteen minutes");
MINUTES.set(14, "fourteen minutes");
MINUTES.set(15, "quarter");
MINUTES.set(16, "sixteen minutes");
MINUTES.set(17, "seventeen minutes");
MINUTES.set(18, "eighteen minutes");
MINUTES.set(19, "nineteen minutes");
MINUTES.set(20, "twenty minutes");
MINUTES.set(21, "twenty one minutes");
MINUTES.set(22, "twenty two minutes");
MINUTES.set(23, "twenty three minutes");
MINUTES.set(24, "twenty-four minutes");
MINUTES.set(25, "twenty five minutes");
MINUTES.set(26, "twenty-six minutes");
MINUTES.set(27, "twenty-seven minutes");
MINUTES.set(28, "twenty-eight minutes");
MINUTES.set(29, "twenty nine minutes");
MINUTES.set(30, "half");

function timeInWords(h, m) {
    // Write your code here
    // o'clock
    if (m === 0) {
        return `${HOURS.get(h)} ${MINUTES.get(m)}`;
    }
    // past
    else if (1 <= m && m <= 30) {
        return `${MINUTES.get(m)} past ${HOURS.get(h)}`;
    }
    // to
    else if (30 < m) { 
        return `${MINUTES.get(60 - m)} to ${HOURS.get(h + 1)}`; 
    }
}

console.log(timeInWords(7, 15)); // quarter past seven
console.log(timeInWords(3, 0)); // three o' clock
console.log(timeInWords(5, 47)); // thirteen minutes to six