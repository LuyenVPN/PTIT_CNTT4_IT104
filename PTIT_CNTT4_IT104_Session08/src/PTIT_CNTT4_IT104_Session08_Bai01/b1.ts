enum weekDays {
    thuHai = "thu hai",
    thuBa = "thu ba",
    thuTu = "thu tu",
    thuNam = "thu nam",
    thuSau = "thu sau",
    thuBay = "thu bay",
    chuNhat = "chu nhat"
}
for (const day in weekDays) {
    console.log(weekDays[day as keyof typeof weekDays]);
}