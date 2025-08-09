"use strict";
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getInfo() {
        return `Ten: ${this.name}, Tuoi: ${this.age}, Email: ${this.email}`;
    }
}
let student = [];
student.push(new Student("Van Luyen", 19, "abc@gmail.com"));
for (const std of student) {
    console.log(std.getInfo());
}
