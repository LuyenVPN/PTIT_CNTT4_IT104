"use strict";
class _Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speek() {
        console.log(`am thanh cua dong vat ${this.name}`);
    }
    setName(new_name) {
        this.name = new_name;
    }
}
class _Dog extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speek() {
        console.log("am thanh: woof");
    }
}
class __Cat extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.age = age;
        this.species = species;
        this.breed = breed;
    }
    speek() {
        console.log("am thanh: meoo");
    }
    getinfo() {
        return `ten ${this.name},tuoi ${this.age},Loai ${this.species}`;
    }
}
class Rabbit extends _Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speek() {
        console.log("am thanh: Squeak");
    }
}
let meomeo = new __Cat("Meo Meo", 2, "meo", "meo");
let dog = new _Dog("gau gau", 20, "cho", "cho");
meomeo.speek();
console.log(meomeo.getinfo());
