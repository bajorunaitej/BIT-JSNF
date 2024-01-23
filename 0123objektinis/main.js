// const obj = {
//     //spalva - savybė, raudona - reikšmė
//     spalva: "raudona",
//     sayHello()
//     {
//         console.log("Hello");
//     },
//     hello: () => {
//         console.log("hello");
//     },
//     hi: function() {
//         console.log("hi");
//     },
// }//{} - objekto notacija

// obj.hi();

class Person{
    // name;
    // height;
    // nationality = "Lithuanian";

    static countOfPeople = 0;

    constructor(name, height) {//Paskirtis - nustatyti objekto laukus
        //f-ja iškviečiama, susikuriant naujam objektui
        console.log("name: " + name);
        console.log("height: " + height);
        this.name = name;
        this.height = height;
        this.nationality = "Lithuanian";
        Person.countOfPeople++;
    }

    //Metodas
    sayHello() {
        console.log(`Labas, aš ${this.name}.`);
    }

    //Statinis metodas
    static countArea(height, width) {
        console.log(height * width); 
    }
}
//Naujo objekto, pasinaudojant klase, sukūrimas
const petras = new Person('Petras', 1.87);
const egle = new Person('Eglė', 1.78);

//Objekto metodų panaudojimas
egle.sayHello();

//Į statinius laukus kreipiamasi per klasę
Person.countArea(5,3);
console.log(Person.countOfPeople);