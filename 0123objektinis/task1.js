// 2. Write a JS program to creae a class called "Rectangle" with properties fpr width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the "Rectangle" class and calculate its area and perimeter

class Rectangle {
    // width;
    // height;
    constructor(width, height) {
        this.width = width;
        this.height = height;

        //susigeneruojami papildomi laukai ↓
        // this.area = width*height;
        // this.perimeter = 2 * (width + height)
    }

    //countPerimeter(width, height) {
    //  console.log(2*(width+height));
    // }

    countArea() {
        return this.width * this.height;
    }
    countParimeter() {
        return 2 * (this.width + this.height)
    }
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return 2 * (this.width + this.height)
    }


}

const staciakampis1 = new Rectangle(2,6);
const staciakampis2 = new Rectangle(8,12);

//Trys skirtingi būdai gauti plotą bei perimtetrą ↓
console.log(staciakampis1.area);
console.log(staciakampis1.perimeter);
// console.log(staciakampis1.countArea());
// console.log(staciakampis1.countPerimeter());