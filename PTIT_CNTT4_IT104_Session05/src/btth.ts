class _Animal{
    protected name:string;
    protected age:number;
    public species: string;
    constructor(name:string,age:number,species: string) {
        this.name=name
        this.age=age
        this.species=species
    }
    speek():void{
        console.log(`am thanh cua dong vat ${this.name}`);
    }
    setName(new_name:string):void{
        this.name=new_name
    }
}
class _Dog extends _Animal{
    public breed: string;
    constructor(name:string,age:number,species: string,breed:string){
        super(name,age,species);
        this.breed=breed
    }
    speek(): void {
        console.log("am thanh: woof");
    }
}
class __Cat extends _Animal{
    public breed: string;
    constructor(name:string,age:number,species: string,breed:string){
        super(name,age,species);
        this.age=age
        this.species=species
        this.breed=breed
    }
    speek(): void {
        console.log("am thanh: meoo");
    }
    getinfo():string{
        return `ten ${this.name},tuoi ${this.age},Loai ${this.species}`
    }
}
class Rabbit extends _Animal{
    public breed: string;
    constructor(name:string,age:number,species: string,breed:string){
        super(name,age,species);
        this.breed=breed
    }
    speek(): void {
        console.log("am thanh: Squeak");
    }
}
let meomeo= new __Cat("Meo Meo",2,"meo","meo")
let dog= new _Dog("gau gau",20,"cho","cho")
meomeo.speek()
console.log(meomeo.getinfo());
