"use strict";
let score = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = 0;
for (let index = 0; index < score.length; index++) {
    sum += score[index];
}
let result = sum / score.length;
console.log("Diem Trung Binh", result.toFixed(2));
