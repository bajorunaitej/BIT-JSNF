// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const generateArrayOfStrings = (Length) => {
    const arr = [];for(let i = 0; i < Length; i++) {
        let atsitiktineRaide = String.fromCharCode(rand(65,68));
        arr.push(atsitiktineRaide);
    }
    return arr;
};
//1 uzd
const charactersArray = generateArrayOfStrings(20);
console.log(charactersArray);

//2uzd
charactersArray.sort();
console.log(charactersArray);

//3uzd 

const arr1 = generateArrayOfStrings(200),
    arr2 = generateArrayOfStrings(200),
    arr3 = generateArrayOfStrings(200),
    sumArray = [],
    uniqueValues = [],
    superUniqueValues = [];

for(let index in arr1) {
    sumArray[index] = arr1[index] + arr2[index] + arr3[index];
    // sumArray[index] = arr1[index].concat(arr2[index], arr3[index]); - sukuriamas stringas
}
console.log(sumArray);

for(const currentValue of sumArray) {
    if(!uniqueValues.includes(currentValue)) {
        uniqueValues.push(currentValue);
    }
}
console.log(uniqueValues);

for(let value of sumArray) {
    let countOfThisCombinantions = 0;

    for(let value2 of sumArray) if(value === value2) countOfThisCombinantions++;

    if(countOfThisCombinantions === 1) {
        superUniqueValues.push(value);//.length - grąžina kiek masyve yra elementų
    }
}
console.log(`Iš viso unikalių reikšmių; ${superUniqueValues.length}`);

//4uzd
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

function generateUniqueArray(Length, min, max) {
    const arr = [];
    while(arr.length < Length) {
        let randomNumber = rand(min,max);
        if(!arr.includes(randomNumber)) arr.push(randomNumber);
    }
    return arr;
}

const array1 = generateUniqueArray(100,100,999), array2 = generateUniqueArray(100,100,999);
console.log('Masyvas 1: ');
console.log(array1);
console.log('Masyvas 2: ');
console.log(array2);

//5uzd
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

const fifthArray = [];
for(let index in arr1) {
    if(arr1[index] !== arr2[index]) {
        fifthArray.push(arr1[index])
    }
}

console.log(fifthArray);

//6uzd 
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
const newArray = [];
for(let value of array1) {
    if(array2.includes(value)) newArray.push(value);
}

console.log(newArray);

//7uzd
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

const newArray2 = [];
let i = 0;
for(let index of array1) {
    newArray2[index] = array2[i];
    i++;
}

console.log(newArray2);