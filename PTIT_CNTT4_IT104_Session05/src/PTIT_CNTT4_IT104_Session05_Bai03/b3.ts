class Employee {
  public name: string;        // truy cap cong khai
  protected company: string;  // truy cap trong class va class con
  private phone: string;      // chi truy cap trong class
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`ten: ${this.name}, cong ty: ${this.company}, so dien thoai: ${this.phone}`);
  }
}
let emp = new Employee("Van Luyen", "Tuyet Voi", "0123456789");
emp.printInfo();
