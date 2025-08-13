"use strict";
var weekDays;
(function (weekDays) {
    weekDays["thuHai"] = "thu hai";
    weekDays["thuBa"] = "thu ba";
    weekDays["thuTu"] = "thu tu";
    weekDays["thuNam"] = "thu nam";
    weekDays["thuSau"] = "thu sau";
    weekDays["thuBay"] = "thu bay";
    weekDays["chuNhat"] = "chu nhat";
})(weekDays || (weekDays = {}));
for (const day in weekDays) {
    console.log(weekDays[day]);
}
