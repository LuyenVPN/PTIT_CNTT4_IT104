"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chieu rong: ${this.width}, Chieu cao: ${this.height}`);
    }
    getArea() {
        return this.width * this.height;
    }
}
let retangle = new Rectangle("hcn", 5, 8);
retangle.getSize();
console.log(retangle.getArea());
