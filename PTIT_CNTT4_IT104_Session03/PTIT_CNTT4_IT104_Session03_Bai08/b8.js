"use strict";
function kiemtra(value) {
    const num = Number(value);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function cong(a, b) {
    const num1 = kiemtra(a);
    const num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Gia Tri Khong Hop Le.";
    }
    return num1 + num2;
}
function tru(a, b) {
    const num1 = kiemtra(a);
    const num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Gia Tri Khong Hop Le.";
    }
    return num1 - num2;
}
function nhan(a, b) {
    const num1 = kiemtra(a);
    const num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Gia Tri Khong Hop Le.";
    }
    return num1 * num2;
}
function chia(a, b) {
    const num1 = kiemtra(a);
    const num2 = kiemtra(b);
    if (num1 === null || num2 === null) {
        return "Gia Tri Khong Hop Le.";
    }
    if (num2 === 0) {
        return "Không thể thực hiện phép chia.";
    }
    return num1 / num2;
}
console.log("Kết quả cộng:", cong("5", 5));
console.log("Kết quả trừ:", tru("5", "hello"));
console.log("Kết quả nhân:", nhan("5", "5"));
console.log("Kết quả chia:", chia("40", "20"));
