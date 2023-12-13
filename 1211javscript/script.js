/*
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiuo nuo min iki max reikšmės +
2.Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai; +
3. Išrūšiuoti String'ų masyvą didėjančia tvarka; +
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka; +
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200; + 
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log() + 
7. Išrūšiuoti masyvą didėjančia tvarka; + 
8. Išrūšiuoti masyvą mažėjančia tvarka; + 
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve. + 
10. Apskaičiuoti visų skaičių vidurkį; + 

1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z + 
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio string pozicija masyve bei šio elemento reikšmė; + 
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K' + 
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą; + 
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti didėjančia tvarka. + 
6. Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale; + 
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abecelę didėjančia tvarka +
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; +
9. Išrikiuokite masyvą priešinga nei abecelės tvarka + 
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'

*/
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log('Pirma dalis: ↓');
//1uzd
console.log('1 užd');

const generateRandomNumbersArray = (Length, min, max) => {
    const arr = [];
    for (let i = 0; i < Length; i++) arr.push(rand(min, max));
    return arr;
}
//2uzd
console.log('2 užd');

const generateString = (Length) => {
    let str = '';
    for (let i = 0; i < Length; i++) {
        str += String.fromCharCode(rand(65,90));
    }
    return str;
};

const stringArray = [];
for (let i = 0; i < 100; i++) {
    stringArray.push(generateString(4));
}
console.log(stringArray);

//3uzd
console.log('3 užd');

stringArray.sort();
console.log(stringArray);

//4uzd
console.log('4 užd');

stringArray.sort().reverse();
console.log(stringArray);

//5uzd
console.log('5 užd');

const numbersArray = generateRandomNumbersArray(100, -100, 200);
console.log(numbersArray);

//6uzd
console.log('6 užd');

if(numbersArray.includes(68)) console.log('68 yra masyve');
else console.log('68 nėra masyve');

//7uzd - išrūšiuoti masyvą didėjančia tvarka
console.log('7 užd');

numbersArray.sort((num1, num2) => {
    return num1 - num2
});
console.log(numbersArray);

//8uzd
console.log('8 užd');
numbersArray.reverse();
console.log(numbersArray);

//9uzd
console.log('9 užd');

// let max = -1000, min = 1000;
// for (let value of numbersArray) {
//     if(value > max) {
//         max = value;
//     }
//     if(value < min) {
//         min = value;
//     } 
// }

// console.log("Minimali masyvo reikšmė: " + min);
// console.log("Maximali masyvo reikšmė: " + max);

let min = Math.min(...numbersArray);
let max = Math.max(...numbersArray);
console.log(min);
console.log(max);

//10 uzd
console.log('10 užd');
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}
console.log(`Vidurkis: ${sum/numbersArray.length}`);

//II dalis
//1 uzd
console.log('II dalis ↓');
console.log('1 užd');

const generateRandomString = (Length) => {
    let str = '';
    for (let i = 0; i < Length; i++) {
        str += String.fromCharCode(rand(65,90));
    }
    return str;
}
const raidziuMasyvas = [];
for (let i = 0; i < 100; i++) {
    raidziuMasyvas.push(generateRandomString(4));
}
console.log(raidziuMasyvas);

//2 uzd
console.log('2 užd');

for (let i = 0; i < raidziuMasyvas.length; i++) {
    if(raidziuMasyvas[i].startsWith('A') && raidziuMasyvas[i].endsWith('A')) console.log(`Indeksas: ${raidziuMasyvas.indexOf(raidziuMasyvas[i])}; reikšmė: ${raidziuMasyvas[i]}`);
}
//3 uzd
console.log('3 užd');

const startsWithX = [];
//raidziuMasyvas.filter(function(letter) {return letter === 'X'});
// for(let index in raidziuMasyvas) { 
//     if(raidziuMasyvas[index].startsWith('X')) startsWithX += raidziuMasyvas[index];
// }
const startsWithSpecificLetter = (array, letter) => {
    arr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].startsWith(letter)) arr.push(array[i]);
    }
    return arr;
}
console.log('Prasideda raide X: ');
console.log(startsWithSpecificLetter(raidziuMasyvas, 'X'));
console.log('Prasideda raide M: ');
console.log(startsWithSpecificLetter(raidziuMasyvas, 'M'));
console.log('Prasideda raide K: ');
console.log(startsWithSpecificLetter(raidziuMasyvas, 'K'));

//4 uzd
console.log('4 užd');

//Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;

const filteredArray = [];
for (let i = 0; i < raidziuMasyvas.length; i++) {
    if(raidziuMasyvas[i].charAt(1) === raidziuMasyvas[i].charAt(2)) filteredArray.push(raidziuMasyvas[i]);
}
console.log(filteredArray);

//5 uzd
console.log('5 užd');

//Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
let count = 0;
for(let value of filteredArray) {
    count += value;
    if(count < 3) filteredArray.sort();
    else filteredArray.sort().reverse();
}
console.log(filteredArray);

//6 uzd
console.log('6 užd');
//Kiekvienai string'ų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
const additionaLetter = [];
for (let i = 0; i < raidziuMasyvas.length; i++) {
    additionaLetter.push(raidziuMasyvas[i].concat(String.fromCharCode(rand(65,90))));
}
console.log(additionaLetter);

//7 uzd
console.log('7 užd');
//Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka


let sortedArray = additionaLetter.map(value => value.split('').sort().join(''));
console.log(sortedArray);
// for (let i = 0; i < additionaLetter.length; i++) {
//     additionaLetter[i].sort();
// }
// console.log(additionaLetter);

//8 uzd
//Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Generuokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS;
console.log('8 užd');

let amountOfTries = 0;
let XMASarray = [];

while(true) {
    const randomStringXMAS = generateString(4);

    if(randomStringXMAS === 'XMAS') {
        XMASarray.push(randomStringXMAS);
        break;
    }
    else {
        XMASarray.push(randomStringXMAS);
        amountOfTries++;
    }
}

console.log(amountOfTries);
console.log(XMASarray);


//9 uzd
//Išrikiuokite masyvą priešinga nei abecelės tvarka
console.log('9 užd');

let sortedXMASarray = XMASarray.sort().reverse();
console.log(sortedXMASarray);

//10 uzd
//Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
console.log('10 užd');

console.log(XMASarray.indexOf('XMAS'));
