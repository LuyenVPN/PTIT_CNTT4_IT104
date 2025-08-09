"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`ten: ${this.name}, cong ty: ${this.company}, so dien thoai: ${this.phone}`);
    }
}
let emp = new Employee("Van Luyen", "Tuyet Voi", "0123456789");
emp.printInfo();
