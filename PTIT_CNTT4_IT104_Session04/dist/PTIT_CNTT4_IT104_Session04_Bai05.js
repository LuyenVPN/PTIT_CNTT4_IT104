"use strict";
function displayb5(menber) {
    console.log(`Nhân viên: ${menber.name} (${menber.age} tuổi), Mã nhân viên: ${menber.employeeid} - Phòng: ${menber.department}`);
}
let menber1 = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeid: "EMP001",
    department: "Kế toán"
};
displayb5(menber1);
