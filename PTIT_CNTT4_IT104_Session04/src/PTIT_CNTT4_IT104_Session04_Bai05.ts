type Person={
    name:string;
    age: number
}
type Employee={
    employeeid:string;
    department:string
}
type StaffMenber= Person&Employee
function displayb5(menber: StaffMenber){
   console.log(`Nhân viên: ${menber.name} (${menber.age} tuổi), Mã nhân viên: ${menber.employeeid} - Phòng: ${menber.department}`);
}
let menber1:StaffMenber={
    name: "Nguyễn Văn A",
    age: 28,
    employeeid: "EMP001",
    department: "Kế toán"
}
displayb5(menber1)