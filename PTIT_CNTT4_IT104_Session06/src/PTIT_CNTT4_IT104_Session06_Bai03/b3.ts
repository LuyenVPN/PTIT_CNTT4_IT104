abstract class _Shape {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getSize(): void; // Abstract method (khong co code, bat buoc lop con phai viet lai)
  // Method thuong
  getName(): string {
    return this.name;
  }
}
class _Rectangle extends _Shape {
  private width: number;
  private height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  // Bắt buộc phải triển khai vì Shape có abstract getArea()
  getSize(): void {
    console.log(`Chieu rong: ${this.width}, Chieu cao: ${this.height}`);
  }
  getArea(): number {
    return this.width * this.height;
  }
}
let newRetangle = new _Rectangle("hcn", 5, 8);
newRetangle.getSize()
console.log(newRetangle.getName());
