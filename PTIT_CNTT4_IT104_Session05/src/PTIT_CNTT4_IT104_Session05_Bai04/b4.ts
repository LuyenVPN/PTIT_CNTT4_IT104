class _Vehicle {
    name:string;
    year: number;
    company: string;
    readonly id: number;
    constructor(id:number,name:string,year:number,company:string) {
        this.id = id;
        this.name=name;
        this.year=year;
        this.company=company;
    }
    getInfo():string{
        return`id:${this.id}ten: ${this.name}, nam: ${this.year}, hang: ${this.company}`
    }
}
let xe1=new _Vehicle(1,"Camry",2000,"Toyota")
console.log(xe1.getInfo());