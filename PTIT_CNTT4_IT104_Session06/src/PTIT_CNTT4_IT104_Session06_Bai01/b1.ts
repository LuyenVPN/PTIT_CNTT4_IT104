abstract class Shape {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getSize(): void;
  getName(): string {
    return this.name;
  }
}
class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getSize(): void {
    console.log(`Chieu rong: ${this.width}, Chieu cao: ${this.height}`);
  }
  getArea(): number {
    return this.width * this.height;
  }
}
let retangle = new Rectangle("hcn", 5, 8);
retangle.getSize()
console.log(retangle.getArea());
