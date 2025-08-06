"use strict";
let char1 = "banana";
let char2 = "hello world";
function loc(word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if (!result.includes(word[i])) {
            result += word[i];
        }
    }
    return result;
}
console.log(loc(char1));
console.log(loc(char2));
