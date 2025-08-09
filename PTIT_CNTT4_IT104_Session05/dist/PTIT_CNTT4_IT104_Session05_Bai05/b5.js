"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(newWidth) {
        this.width = newWidth;
    }
    getHeight() {
        return this.height;
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
    V() {
        return this.width * this.height;
    }
    S() {
        return 2 * (this.width + this.height);
    }
}
const hcn = new Rectangle(5, 10);
console.log(`chieu rong: ${hcn.getWidth()}`);
console.log(`chieu dai: ${hcn.getHeight()}`);
console.log(`chu vi: ${hcn.S()}`);
console.log(`dien tich: ${hcn.V()}`);
hcn.setWidth(8);
hcn.setHeight(12);
console.log(`\nSau khi cap nhat:`);
console.log(`chieu rong: ${hcn.getWidth()}`);
console.log(`chieu dai: ${hcn.getHeight()}`);
console.log(`chu vi: ${hcn.S()}`);
console.log(`dien tich: ${hcn.V()}`);
