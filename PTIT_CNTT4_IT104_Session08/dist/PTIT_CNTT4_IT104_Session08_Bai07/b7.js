"use strict";
function flatten(arr) {
    let result = [];
    for (let item of arr) {
        for (let cur of item) {
            result.push(cur);
        }
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
