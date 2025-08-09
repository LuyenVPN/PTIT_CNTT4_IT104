"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `ten: ${this.name}, nam: ${this.year}, hang: ${this.company}`;
    }
}
let xe = new Vehicle("Camry", 2000, "Toyota");
console.log(xe.getInfo());
