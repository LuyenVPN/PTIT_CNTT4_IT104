"use strict";
class _Shape {
    constructor(name) {
        this.name = name;
    }
    // Method thuong
    getName() {
        return this.name;
    }
}
class _Rectangle extends _Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Bắt buộc phải triển khai vì Shape có abstract getArea()
    getSize() {
        console.log(`Chieu rong: ${this.width}, Chieu cao: ${this.height}`);
    }
    getArea() {
        return this.width * this.height;
    }
}
let newRetangle = new _Rectangle("hcn", 5, 8);
newRetangle.getSize();
console.log(newRetangle.getName());
