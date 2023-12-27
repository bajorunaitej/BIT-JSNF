//Tai kas funkcijos deklaracijoje - parametras
// function showMessage(message) {
//     console.log(message);
// }

// --------------------------------------------


//Negalima iškviesti ↓ prieš deklaruojant
// const showMessage = (message) => {
//     console.log(message);
// }

// --------------------------------------------
// const showMessage = function (message) {
//     console.log(message);
// }

// //Tai kas yra iškvetime tarp skliaustų - argumentas
// showMessage('wassup')

function findBiggerValue(a, b) {
    function isABiggerThanB(aValue, bValue) {
        return aValue > bValue
    }
    if(isABiggerThanB(a, b)) return a;
    else return b;
}
console.log(findBiggerValue(2,5));

//... - spread operatorius
function findMAxValue(...args) {
    console.log(args);
    let max = args[0];
    for (let index in args) {
        if(args[index] > max) max = args[index];
    }
    console.log(max);
}

//spread operatorius
findMAxValue(...[2,6,8,-1,-5,100,15,26]);
findMAxValue([2,6,8,-1,-5,100,15,26], 'labas');

console.log(Math.max(1,5,6,9,-5,-2));
// --------------------------------------------


document.querySelector('.pienas').addEventListener('click', () => {console.log('neliesk!')});

function callBackFunction(message, callback) {
    console.log(message);
    callback();
}

callBackFunction('sdjnsdjksjd', () => {console.log('f-jos pabaiga');
});

callBackFunction('pertrauka', () => {console.log('dar nepabaiga');})

function recursion(value) {
    console.log('value: ' + value);
    console.log(value);
    if(value < 10) recursion(value+1)

}
recursion(4);

function fact(n) {
    if(n === 1 || n === 0) return 1;
    else return n * fact(n-1);
}

console.log(fact(3));

// --------------------------------------------

//Sukurti f-ją, kuri apskaičiuoja pažymių vidurkį

function countAverage(...pazymiai) {
    let sum = 0;
    for(let pazymys of pazymiai) sum += pazymys;
    let average = sum / pazymiai.length;
    return average;
}

console.log(countAverage(4,6,62,6));

// --------------------------------------------
//Sukurti funkciją, kuriai paduodamas skaičių masyvas.
//Jei masyve daugiau nei 6 elementai - kiekvieną elementą padalinti iš 2.
// Kitu atveju padauginti visus elementus iš 2.
// Gražinti visų masyve esančių elementų vidurkį.
// tikrinimą daryti išorėje

//1. Tikrinti ar masyve yra daugiau nei 6 elementai
//Jei taip:
//Iškviesti f-ją, kuri apskaičiuoja vidurkį, padalindama,a visus sk. iš 2
//Jie ne:
//Iškviesti f-ją, kuri paskaiciuoja vidurkį padaugindama visus sk. iš 2
//2. Funkcijos viduje patikrinti ar paduodamas argumentas yra masyvas
//3. Apskaičiuotu resultatinio masyvo elemento reikšmes
//4. Apskaičiuoti resultatinio masyvo elem. sumą
//5. Apskaiciuoti vidurkį padalinant visą eleme. sumą is elem. kiekio
//6. Grąžinti vidurkį

const arr = [4,7,8,9,5,3,4];

if(arr.length > 6) {
    //f-ja kuri padalina visus sk. iš 2 ir apskaičiuoja vidurkį
    countAverageSpecial(arr, divideAllElemByTwo)

}
else{
    //f-ja, kuri padaugina visus sk. iš 2 ir apsaiciuoja vidurkį
    countAverageSpecial(arr, multiplyAllElemByTwo)
}

function divideAllElemByTwo(array) {
    for(let index in array) {
        array[index] /= 2
    }
    return array;
}
function multiplyAllElemByTwo(array) {
    for(let index in array) {
        array[index] *= 2
    }
    return array;
}

// console.log(divideAllElemByTwo([4,20,66]));
function countAverageSpecial(array, callback) {
    if(typeof array !== 'object') return 0;
    const resultArray = callback(array);
    let sum = 0;
    for(let value of resultArray) {
        sum += value;
    }
    let average = (sum / array.length).toFixed(2);
    return average;
}