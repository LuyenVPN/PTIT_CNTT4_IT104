"use strict";
function hasUniqueCharacters(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}
function findLongestUniqueWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (hasUniqueCharacters(words[i])) {
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
    }
    return longest;
}
// Ví dụ:
const input = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(input)); // Output: "orange"
