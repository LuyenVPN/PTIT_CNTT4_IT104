"use strict";
class _Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `id:${this.id}ten: ${this.name}, nam: ${this.year}, hang: ${this.company}`;
    }
}
let xe1 = new _Vehicle(1, "Camry", 2000, "Toyota");
console.log(xe1.getInfo());
