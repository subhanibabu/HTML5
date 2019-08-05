// function superhero(name, strength, speed) {
//     this.name = name;
//     this.strength = strength;
//     this.speed = speed;
// }

// superhero.prototype.goodHero = true;
// superhero.prototype.powerUp = function(){
//     this.strength +=5;
// }
// let hero1 = new superhero("Hulk", 10, 5);
// console.log(hero1);
// hero1.powerUp();
// console.log(hero1);

// ES6 implementation

class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp(){
        this.strength += 5;
    }
    get name(){
        console.log("get name");
    }
    set name(newname){
        this._name = newname;
    }
    static goodHero(){
        return true;
    }
}

const hulkdetails = ["Hulk", 10, 5];
const bulkdetails = ["Bulk", 10, 5];

let hero1 = new superhero(...hulkdetails);
let hero2 = new superhero(...bulkdetails);

hero1.name = "george";
console.log(hero1)