"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Day la loai cv ${this.type} voi muc luong ${this.calculateSalary()}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new ParttimeJob("Parttime", 80);
const fulltime = new FulltimeJob("Fulltime");
parttime.printType();
fulltime.printType();
