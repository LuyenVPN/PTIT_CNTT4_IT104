class Student {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
let allStudents: Student[] = [];
class Classroom {
  private students: Student[] = [];
  showStudents(): void {
    this.students.forEach((s) => {
      console.log(`ID: ${s.getId()}, Ten: ${s.getName()}`);
    });
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  filterStudent(id: number): Student[] {
    return this.students.filter((s) => s.getId() === id);
  }
  addStudentInClass(studentId: number): void {
    const index = allStudents.findIndex((s) => s.getId() === studentId);
    if (index !== -1) {
      this.students.push(allStudents[index]);
      allStudents.splice(index, 1);
    }
  }
}
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "Cuong"));
allStudents.push(new Student(4, "Dung"));
allStudents.push(new Student(5, "Hanh"));
allStudents.push(new Student(6, "Lan"));

const class1 = new Classroom();
const class2 = new Classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
class1.showStudents();
class2.showStudents();
console.log(allStudents);
