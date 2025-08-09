class Student{
    name:string
    age:number
    email:string
    constructor(name:string,age:number,email:string){
        this.name=name
        this.age=age
        this.email=email
    }
    getInfo():string{
        return`Ten: ${this.name}, Tuoi: ${this.age}, Email: ${this.email}`
    }
}
let student:Student[]=[]
student.push(new Student("Van Luyen",19,"abc@gmail.com"))
for (const std of student) {
    console.log(std.getInfo());
}
