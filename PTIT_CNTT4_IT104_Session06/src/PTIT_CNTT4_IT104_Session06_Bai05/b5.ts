// Khai bao interface
interface ChangeSpeed {
  speedUp(value: number): void;
  slowDown(value: number): void;
  stop(): void;
}
class Vehicle implements ChangeSpeed {
  private speed: number;
  constructor(Speed: number) {
    this.speed = Speed;
  }
  speedUp(value: number): void {
    this.speed += value;
    console.log(`toc do hien tai khi tang: ${this.speed} km/h`);
  }
  slowDown(value: number): void {
    this.speed -= value;
    if (this.speed < 0) this.speed = 0;
    console.log(`toc do hien tai khi giam: ${this.speed} km/h`);
  }
  stop(): void {
    this.speed = 0;
    console.log(`toc do hien tai khi dung: ${this.speed} km/h`);
  }
}
const myVehicle = new Vehicle(0);
myVehicle.speedUp(50);   
myVehicle.slowDown(20);  
myVehicle.stop();       
