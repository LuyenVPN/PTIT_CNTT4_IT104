"use strict";
class _Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setById(name) {
        this.name = name;
    }
}
let _allStudents = [];
class _Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach((s) => {
            console.log(`ID: ${s.getId()}, Ten: ${s.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((s) => s.getId() === id);
    }
    addStudentInClass(studentId) {
        const index = _allStudents.findIndex((s) => s.getId() === studentId);
        if (index !== -1) {
            this.students.push(_allStudents[index]);
            _allStudents.splice(index, 1);
        }
    }
    removeStudent(id) {
        const index = this.students.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            _allStudents.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }
    editStudent(id, name) {
        const index = this.students.findIndex((s) => s.getId() === id);
        if (index !== -1) {
            this.students[index].setById(name);
        }
    }
}
_allStudents.push(new _Student(1, "An"));
_allStudents.push(new _Student(2, "Binh"));
_allStudents.push(new _Student(3, "Cuong"));
_allStudents.push(new _Student(4, "Dung"));
_allStudents.push(new _Student(5, "Hanh"));
_allStudents.push(new _Student(6, "Lan"));
const class12 = new _Classroom();
const class21 = new _Classroom();
class12.addStudentInClass(1);
class12.addStudentInClass(2);
class12.addStudentInClass(3);
class21.addStudentInClass(4);
class21.addStudentInClass(5);
class21.addStudentInClass(6);
class12.showStudents();
class21.showStudents();
console.log(_allStudents);
class12.removeStudent(1);
console.log(_allStudents);
class12.editStudent(3, "da chinh sua");
class12.showStudents();
