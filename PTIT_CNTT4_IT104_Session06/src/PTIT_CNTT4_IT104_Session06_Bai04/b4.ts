interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}
class Circle implements Geometry {
  private radiu: number;
  constructor(radiu: number) {
    this.radiu = radiu;
  }
  calculateArea(): number {
    return Math.PI * this.radiu * this.radiu;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radiu;
  }
}
class $Rectangle implements Geometry {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const circle = new Circle(5);
console.log(`Hinh tron co dien tich: ${circle.calculateArea()}`);
console.log(`Hinh tron co chu vi: ${circle.calculatePerimeter()}`);
const rectangle = new $Rectangle(4, 6);
console.log(`Hinh chu nhat co dien tich: ${rectangle.calculateArea()}`);
console.log(`Hinh chu nhat co chu vi: ${rectangle.calculatePerimeter()}`);
