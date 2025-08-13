"use strict";
function find(arr) {
    for (let item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log(find([1, 3, 5, 8, 11]));
console.log(find([1, 7, 3, 9]));
console.log(find(["a", 2, 3, 4]));
console.log(find([true, "b", "a"]));
