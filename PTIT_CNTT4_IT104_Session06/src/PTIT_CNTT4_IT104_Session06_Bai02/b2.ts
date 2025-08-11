abstract class Job {
  protected type: string;
  constructor(type: string) {
    this.type = type;
  }
  abstract calculateSalary(): number;
  printType(): void {
    console.log(
      `Day la loai cv ${this.type} voi muc luong ${this.calculateSalary()}`
    );
  }
}
class ParttimeJob extends Job {
  private workingHour: number;
  constructor(type: string, workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }
  public calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor(type: string) {
    super(type);
  }
  calculateSalary(): number {
    return 10000000;
  }
}
const parttime = new ParttimeJob("Parttime", 80);
const fulltime = new FulltimeJob("Fulltime");
parttime.printType();
fulltime.printType();
