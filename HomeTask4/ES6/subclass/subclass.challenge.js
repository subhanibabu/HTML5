
// inheritance - subclasses

//implement methods in subclass (Human) which will override parent class functionality

//1. implement a custom function which will add "Mr" to name property in subclass
//2. implement a method in subclass which will increment the power by 2
//3. implement a method in subclass to reduce the power by half
//4. add 2 more properties to Human class - city and state (private to human class)
class superhero {
    constructor(name, strength, speed) {
        this._name = name;
        this._strength = strength;
        this._speed = speed;
        // this.goodHero = true; // focus on this
    }
    powerUp() {
        this.strength += 5;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        this._name = newname;
    }
    static goodHero() {
        return true;
    }
}

class Human extends superhero {
    constructor(healthpoints, city, state, ...superherostuff) {
        super(...superherostuff);
        this._healthpoints = healthpoints;
        this._city = city;
        this._state = state;
    }
    set name(name) {
        this._name = name;
    }
    get getDetails() {
        return `City is : ${this._city} and State is : ${this._state}`;
    }
    addMrToName() {
        return `Mr.${super.name}`;
    }
    incrementPowerByTwo() {
        this._strength += 2;
    }
    reducePoweryHalf() {
        this._strength /= 2;
    }
}
const details = [20, "Hyderabd","Telangana", "Bill", 10, 8]
const human = new Human(...details);
console.log(human);
console.log(human.addMrToName());
human.name = "Subbu";
console.log(human.addMrToName());
console.log(human)
human.incrementPowerByTwo();
console.log("After incrementing power by 2:", human);
human.reducePoweryHalf();
console.log("After reducing power by half :", human);
console.log(human.getDetails);
const hero4 = new superhero(20, "abc", 8);
console.log(hero4);
