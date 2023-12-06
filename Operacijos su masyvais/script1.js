function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('1. Sukurkite masyvą iš 20 elementų: \n a) Kurių reikšmės: 0, 1, 2 …, 18 ,19;')

// function generateArrayOfNumbers(min, max, countOfElements) {
//     let array = [];
//     for (let i = 0; i < countOfElements; i++) {
//         array.push(min, max);
//     }
//     return array;    
// }
console.log('b) Kurių reikšmės: 1,2 3, … ,19, 20')

let arr1 = [];
for (let i = 0; i < 20; i++) {
    arr1.push(i);
}
console.log(arr1);
//---------------------------------------------------------------

console.log('c) Kurių reikšmės: 19, 18 … 2, 1, 0')

let arr2 = [];
for (let i = 0; i < 20; i++) {
    arr2.push(i);
}
console.log(arr2.reverse());
//---------------------------------------------------------------

console.log('d) Kurių reikšmės: 20, 21, 22…. 38, 39..')

let arr3 = [];
for (let i = 20; i < 40; i++) {
    arr3.push(i);
    
}
console.log(arr3);
//---------------------------------------------------------------

console.log('e) Kurių reikšmės: 49, 48, 47…. 31, 30')

let arr4 = [];
for (let i = 30; i < 50; i++) {
    arr4.push(i);
}
console.log(arr4.reverse());

//---------------------------------------------------------------

console.log('f) Su atsitiktinėmis reikšmėmis nuo 0 iki 10')

let arr5 = [];
for (let i = 0; i < 20; i++) {
    arr5.push(rand(0,10));
}
console.log(arr5);
//---------------------------------------------------------------

// Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;
console.log('2. join() funkcija')



console.log(arr5.join('...'));

//---------------------------------------------------------------

// Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę.
console.log('4. 15 atsitktinių raidžių');

let stringas ='';

for (let i = 0; i < 15; i++) {
    let sk = rand(97,122);
    stringas += `${String.fromCharCode(sk)} `;
}

console.log(stringas);
