// 2. Write a JS program to creae a class called "Circle" with properties for radius. Include two methods to calculate area and perimeter. Create an instance of the "Circle" class and calculate its area and perimeter

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI*this.radius**2;
    }
    get perimeter() {
        return 2*Math.PI*this.radius;
    }
}

const circleK = new Circle(7);
console.log(circleK.area);
console.log(circleK.perimeter);