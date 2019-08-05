const CARCOLOR = Symbol(); // give red and no see changes in below console
const CARMAKER = Symbol();
const CARMODEL = Symbol();

class Car {
    constructor(color, maker, model) {
        this[CARCOLOR] = color;
        this[CARMAKER] = maker;
        this[CARMODEL] = model;
    }
    set carColor(color) {
        this[CARCOLOR] = color;
    }
    get carColor() {
        return this[CARCOLOR];
    }

    set carModel(model) {
        this[CARMODEL] = model;
    }
    get carModel() {
        return this[CARMODEL];
    }

    set carMaker(maker) {
        this[CARMAKER] = maker;
    }
    get carMaker() {
        return this[CARMAKER];
    }
}
let myCar = new Car('Red', 'Porsche', 'Cayanne');
myCar.color = `blue`;
console.log(myCar.color);
console.log(myCar);
myCar.carColor = `Black`;
console.log(`Car Color is: ${myCar.carColor}`);
myCar.carModel = `Land Rover`;
console.log(`Car Model is: ${myCar.carModel}`);
myCar.carMaker = `Jaguar`;
console.log(`Car Maker is: ${myCar.carMaker}`);
// implement the functionality to set and get values to car color - Black, car model - Land Rover and car maker - Jaguar
// you should assign values to those private variables inside class - use setter and getter methods
