function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateArrayOfRandomNumbers(min, max, countOfNumbers) {
    let array = [];
    for (let i = 0; i < countOfNumbers; i++) {
        array.push(rand(min, max));        
    }
    return array;
}
const arr = generateArrayOfRandomNumbers(33,55,5);
console.log(arr);

const generateArrayOfRandomNumbers2 = (min, max, countOfNumbers) => {
    let array = [];
    for (let i = 0; i < countOfNumbers; i++) {
        array.push(rand(min, max));        
    }
    return array;
}
// const naudojamas masymas, objektams ir funkcijoms
//Const - nekintamumas, geroji praktika, optimizavimas - tam tikrų sistemų

const arr2 = generateArrayOfRandomNumbers2(33,55,5);
console.log(arr2);

//masyvas su const
const arr3 = [];
arr3.push(10);
arr3.push(1);
arr3.push(9);
console.log(arr3);
arr3.splice(-1);
console.log(arr3);

//Const funkcijos turi būti aprašytos aukščiau
const arr4 = generateArrayOfRandomNumbers2(1,99,20);
console.log(arr4);

// Senoji darbo su masyvais sintaksė

// Visų skaičių vidurkis masyve
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
let average = sum / arr4.length;
console.log(average);
// console.log(average);


const arr5 = generateArrayOfRandomNumbers2(1,1000,23);
sum = 0;

//For of ciklas - skirtas atlikti operacijas su visais masyvo, objekto elementais:
//grąžina einamojo masyvo elem. reikšmę
for(let value of arr5) {
    sum += value;
}

average = sum / arr5.length;

console.log(arr5);
console.log(average);


//For of ciklas - skirtas atlikti operacijas su visais masyvo, objekto elementais:
//Grąžina einamojo masyvo elemento indekso reikšmę
const arr6 = generateArrayOfRandomNumbers2(1,1000,30);
console.log(arr6);
sum = 0;

for(let index in arr6) {
    sum += arr6[index];
}

average = sum / arr6.length;
console.log(average);

console.log("-------1--------");

for(let x of arr6) {
    console.log(x);
}
console.log("-------2--------");
for(let x in arr6) {
    console.log(x);
}

console.log("-------3--------");
//Atvirkštinis ciklas 
for (let i = 70; i >=0; i--) {
    console.log(i);
}

//Pašalinti visus lyginius elementus

const masyvas = [6, 2, 9, 5, 12];

// let filteredValues = masyvas.filter((num) =>{
//     //true
//     //false
//     // return num % 2 !== 0;

//     return num > 7;
// });
//Trumpesnis užrašymas ↓
// let filteredValues = masyvas.filter((num) => num > 7);
let filteredValues = masyvas.filter(function(num) {return num === 2});

//preaėję filtrą elementai lieka filteredValues masyve
console.log(filteredValues);

console.log(masyvas);

//Masyvas po filtracijos lieka toks pat


//Map atlieka operacijas su visais masyvo elementais ↓
console.log("Map ↓");

let masyvas2 = [6, 2, 9, 5, 12];
console.log(masyvas2);


let modifikuotasMasyvas = masyvas2.map((value, index) => {
    console.log(`Indeksas: ${index}, reikšmė: ${value}`);
    return value + index
});
console.log(modifikuotasMasyvas);

//Reduce - grąžina rezultatą operacijos su visais elementais ↓
console.log(masyvas2);
let suma = masyvas2.reduce((total, value) => total + value);
//Vidurkio apskaičiavimas pasinaudojant reduce ↓
console.log(suma / masyvas2.length);

//some
//tikrinimas ar bent vienas iš masyvo elem. praeina patikrinimą
let isThereNumberLargerThan12 = masyvas2.some((value) => value > 9);
console.log(isThereNumberLargerThan12);


//every
//tikrina ar visi elem. iš masyvo praeina patikrinimą

let isEveryNumberLargerThan1 = masyvas2.every((value) => value > 3);
console.log(isEveryNumberLargerThan1);

//sort

masyvas2.sort(function(a, b) {
    // jei grąžinama reikšmė:
    // > 0 sort a after b, e.g.[b, a]
    // < 0 sort a before b, e.g. [a, b]
    // === 0 keep original order of a and b
    return a - b;
    });
console.log(masyvas2);

