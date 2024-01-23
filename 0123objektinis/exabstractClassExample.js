class Vehicle{
    // speed, vehicleName

    constructor(speed, vehicleName) {
        this.speed = speed;
        this.vehicleName = vehicleName;
        this.color = "red";
    }

    honk() {
        console.log('Makes a sound');
    }
}

class Car extends Vehicle {
    constructor(speed, name, doorCount)  {
        super(speed, name);
        this.doorCount = doorCount;
    }

    honk() {
        console.log('Moooove');
    }
}

class Bike extends Vehicle {
    constructor(speed, name)  {
        super(speed, name);
    }

    honk() {
        console.log('Lady!!!');
    }
}

class Ship extends Vehicle {
    constructor(speed, name, doorCount)  {
        super(speed, name);
        this.doorCount = doorCount;
    }

    honk() {
        console.log('Seven nation');
    }
}

const toyota = new Car(220, 'Toyota Auris', 4);
const bmx = new Bike(45, "BMX");
const ship = new Ship(14, "ShipX", 140);

toyota.honk();
bmx.honk();
ship.honk();
console.log(toyota);
console.log(bmx);
console.log(ship);