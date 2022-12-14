/* Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
*/

function doubleLetters(str){
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i-1]) return true;
    }
    return false;
}

console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
console.log(doubleLetters("yumy"));