const arr = [1, 4, 8, -2, "Petras"];
console.log(typeof arr);

const obj = {
    color: 'red',
    name: 'Petras',

    //...
    //Neribotas kiekis laukų
    //Gali būti ir masyvas įdėtas
}

console.log(obj.color);
//laukas: reikšmė
//key: value
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 36,
    nationality: 'British',
    isMarried: false,
    kids: ['Sara', 'Boston'],
};

console.log(person.age);
console.log(`Hello, my name is ${person.firstName}, my age is ${person.age}, I am ${person.nationality} and my kids are ${person.kids.join(', ')}. And I am ${person.isMarried ? ' married' : 'not married'}.`);

//Tuščio objekto sukūrimas
const gyvunas = {};
console.log(gyvunas);

gyvunas.animalType = 'Lion';
console.log(gyvunas);

let laukas = 'animalType';
console.log(gyvunas['animalType']);
console.log(gyvunas[laukas]);
console.log(gyvunas.animalType);

gyvunas.occupation = 'rule';
console.log(gyvunas);


// const dog = {
//     breed: 'German Shepherd',
//     name: 'Angela',
//     age: 7,
//     colors: ['brown', 'black'],
// };

const dog = {};
dog.breed = 'Labrador retriever';
dog.name = 'Mila';
dog.age = '5';
dog.colors = ['black', 'white'];
console.log(dog);


// in grąžina indeksus
//šiuo atveju grąžins laukų pavadinimus
for(let property in dog) {
    console.log(`${property}: ${dog[property]}`);
}

const people = [
    {
        firstName: 'Laura',
        lastName: 'Gonzalez',
        age: 25,
        nationality: 'Iraq',
    },
    {
        firstName: 'Saulius',
        lastName: 'Kreve',
        age: 38,
        nationality: 'Lithuania',
        isMarried: false,
    },
    {
        firstName: 'John',
        lastName: 'Schmit',
        age: 39,
        nationality: 'Canada',
    }
];

//Kreipimasis į objektus masyve
console.log(people[1].firstName,people[1].lastName);

//Objektų pasiėmimas iš masyvų per ciklą
for(let person of people) {
    console.log(person);
    console.log(person.firstName, person.lastName);
}