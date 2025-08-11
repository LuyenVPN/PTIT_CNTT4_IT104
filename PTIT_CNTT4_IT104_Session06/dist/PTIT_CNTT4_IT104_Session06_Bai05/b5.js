"use strict";
class Vehicle {
    constructor(Speed) {
        this.speed = Speed;
    }
    speedUp(value) {
        this.speed += value;
        console.log(`toc do hien tai khi tang: ${this.speed} km/h`);
    }
    slowDown(value) {
        this.speed -= value;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`toc do hien tai khi giam: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`toc do hien tai khi dung: ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle(0);
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop();
