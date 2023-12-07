
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
console.log('1. Masyvas, 200 elementų su reikšmėmis A, B, C ir D ↓')

let A = 0,
    B = 0,
    C = 0,
    D = 0;

raidziuMasyvas = [];

for (let i = 0; i < 200; i++) {
    let sk = rand(65,68);
    raidziuMasyvas.push(String.fromCharCode(sk));
    if(sk === 65) A++;
    if(sk === 66) B++;
    if(sk === 67) C++;
    if(sk === 68) D++;

}
console.log(raidziuMasyvas);
console.log(`A: ${A}`);
console.log(`B: ${B}`);
console.log(`C: ${C}`);
console.log(`D: ${D}`);

//--------------------------------------------------------------
console.log('2. Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.')

let pagalAbecele = raidziuMasyvas.sort();
console.log(pagalAbecele);

//--------------------------------------------------------------
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
console.log('3. Sugeneruoti trys masyvai, sudėtos masyvų reikšmės, reikšmės pagal atit. indeksus..')

let A1, A2, A3;
A1 = A2 = A3 = 0;
let B1, B2, B3;
B1 = B2 = B3 = 0;
let C1, C2, C3;
C1 = C2 = C3  = 0;
let D1, D2, D3;
D1 = D2 = D3 = 0;

raidziuMasyvas1 = [];
raidziuMasyvas2 = [];
raidziuMasyvas3 = [];

for (let i = 0; i < 200; i++) {
    let sk = rand(65,68);
    raidziuMasyvas1.push(String.fromCharCode(sk));
    if(sk === 65) A1++;
    if(sk === 66) B1++;
    if(sk === 67) C1++;
    if(sk === 68) D1++;

}
for (let i = 0; i < 200; i++) {
    let sk = rand(65,68);
    raidziuMasyvas2.push(String.fromCharCode(sk));
    if(sk === 65) A2++;
    if(sk === 66) B2++;
    if(sk === 67) C2++;
    if(sk === 68) D2++;

}
for (let i = 0; i < 200; i++) {
    let sk = rand(65,68);
    raidziuMasyvas3.push(String.fromCharCode(sk));
    if(sk === 65) A3++;
    if(sk === 66) B3++;
    if(sk === 67) C3++;
    if(sk === 68) D3++;

}
// for (let i = 0; i < 200; i++) {
//     let sk = rand(65,68);
//     raidziuMasyvas1.push(String.fromCharCode(sk));
//     raidziuMasyvas2.push(String.fromCharCode(sk));
//     raidziuMasyvas3.push(String.fromCharCode(sk));
//     if(sk === 65) {
//         A1++;
//         A2++;
//         A3++;};
//     if(sk === 66) {
//         B1++;
//         B2++;
//         B3++;};
//     if(sk === 67) {
//         C1++;
//         C2++;
//         C3++;};
//     if(sk === 68) {
//         D1++;
//         D2++;
//         D3++;};
// }
// console.log("Pirmas masyvas:");
// console.log(raidziuMasyvas1);
// console.log(`A: ${A1} | B: ${B1} | C: ${C1} | D: ${D1}`);
// console.log("Antras masyvas:");
// console.log(raidziuMasyvas2);
// console.log(`A: ${A2} | B: ${B2} | C: ${C2} | D: ${D2}`);
// console.log("Trečias masyvas:");
// console.log(raidziuMasyvas3);
// console.log(`A: ${A3} | B: ${B3} | C: ${C3} | D: ${D3}`);

let bendrasMasyvas = [];
for (let i = 0; i < raidziuMasyvas1.length; i++) {
    if(raidziuMasyvas1[i] === raidziuMasyvas2[i] && 
        raidziuMasyvas1[i] === raidziuMasyvas3[i]) bendrasMasyvas++;
} 

console.log(bendrasMasyvas);


