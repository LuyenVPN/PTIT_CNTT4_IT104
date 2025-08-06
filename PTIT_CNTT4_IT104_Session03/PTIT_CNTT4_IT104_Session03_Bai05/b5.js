"use strict";
let fistName = "van";
let lastName = "luyen";
function upperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
let fullName = `${upperCase(fistName)} ${upperCase(lastName)}`;
console.log(fullName);
