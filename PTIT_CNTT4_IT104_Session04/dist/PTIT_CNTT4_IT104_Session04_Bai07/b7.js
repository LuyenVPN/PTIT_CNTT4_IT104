"use strict";
function processInput(input) {
    if (typeof input === "string") {
        const digitOnly = [...input].filter(char => char >= '0' && char <= '9').join('');
        if (digitOnly.length === input.length) {
            const num = Number(input);
            console.log(Math.pow(num, 2));
        }
        else {
            const letters = [...input].filter(char => /[a-zA-Z]/.test(char)).length;
            console.log(`${letters} ky tu chu cai`);
        }
    }
    else if (typeof input === "number") {
        if (input < 2 || !Number.isInteger(input)) {
            console.log("Khong phai so nguyen to");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? "La so nguyen to" : "Khong phai so nguyen to");
    }
    else if (typeof input === "boolean") {
        console.log(input ? "Gia tri la true - tien hanh xu ly" : "Gia tri la false - dung xu ly");
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
