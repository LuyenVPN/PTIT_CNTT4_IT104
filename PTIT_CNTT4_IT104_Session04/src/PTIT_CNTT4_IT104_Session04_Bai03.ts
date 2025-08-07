type Student= {
    name:string;
    age:number;
    email:string
}
let student1: Student={
    name: "Nguyen A",
    age: 20,
    email: "nguyena@gmail.com"
}
function display(std: Student){
    console.log(`Toi ten la ${std.name}, toi ${std.age} tuoi, va email toi la ${std.email}`);
}
display(student1);