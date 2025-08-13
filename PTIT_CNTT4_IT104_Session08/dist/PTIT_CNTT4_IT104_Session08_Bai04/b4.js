"use strict";
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let user = { id: 99, name: "Luyen" };
let address = { city: "Bac Ninh", country: "Viet Nam" };
let merge = mergeObj(user, address);
console.log(merge);
