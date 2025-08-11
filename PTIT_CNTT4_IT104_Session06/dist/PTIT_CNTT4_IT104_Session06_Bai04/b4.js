"use strict";
class Circle {
    constructor(radiu) {
        this.radiu = radiu;
    }
    calculateArea() {
        return Math.PI * this.radiu * this.radiu;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radiu;
    }
}
class $Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log(`Hinh tron co dien tich: ${circle.calculateArea()}`);
console.log(`Hinh tron co chu vi: ${circle.calculatePerimeter()}`);
const rectangle = new $Rectangle(4, 6);
console.log(`Hinh chu nhat co dien tich: ${rectangle.calculateArea()}`);
console.log(`Hinh chu nhat co chu vi: ${rectangle.calculatePerimeter()}`);
