class Vehicle {
    name:string;
    year: number;
    company: string;
    constructor(name:string,year:number,company:string) {
        this.name=name;
        this.year=year;
        this.company=company;
    }
    getInfo():string{
        return`ten: ${this.name}, nam: ${this.year}, hang: ${this.company}`
    }
}
let xe=new Vehicle("Camry",2000,"Toyota")
console.log(xe.getInfo());
