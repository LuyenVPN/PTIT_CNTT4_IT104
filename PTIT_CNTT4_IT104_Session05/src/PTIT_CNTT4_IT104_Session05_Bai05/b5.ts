class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getWidth(): number {
    return this.width;
  }
  setWidth(newWidth: number): void {
    this.width = newWidth;
  }
  getHeight(): number {
    return this.height;
  }
  setHeight(newHeight: number): void {
    this.height = newHeight;
  }
  V(): number {
    return this.width * this.height;
  }
  S(): number {
    return 2 * (this.width + this.height);
  }
}
const hcn = new Rectangle(5, 10);
console.log(`chieu rong: ${hcn.getWidth()}`);
console.log(`chieu dai: ${hcn.getHeight()}`);
console.log(`chu vi: ${hcn.S()}`);
console.log(`dien tich: ${hcn.V()}`);
hcn.setWidth(8);
hcn.setHeight(12);
console.log(`\nSau khi cap nhat:`);
console.log(`chieu rong: ${hcn.getWidth()}`);
console.log(`chieu dai: ${hcn.getHeight()}`);
console.log(`chu vi: ${hcn.S()}`);
console.log(`dien tich: ${hcn.V()}`);
