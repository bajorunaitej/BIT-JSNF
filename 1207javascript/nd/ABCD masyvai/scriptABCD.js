
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

let masyvas1_2 = raidziuMasyvas1.map((e, i) => e + raidziuMasyvas2[i]);
let bendrasMasyvas = masyvas1_2.map((e, i) => e + raidziuMasyvas3[i]);

console.log("Benras 3 masyvų raidės: ↓")
console.log(bendrasMasyvas);
//--------------------------------------------------------------
//Nesikartojančios raidės ir unikalios kombinacijos

let nesikartojancios = 0;
let unikalios = 0;

for (let i = 0; i < bendrasMasyvas.length; i++) {
    if(bendrasMasyvas[i] === 'AAA' || bendrasMasyvas[i] === 'BBB' || bendrasMasyvas[i] === 'CCC' || bendrasMasyvas[i] === 'DDD') nesikartojancios++;
    else unikalios++;
}

console.log(`Nesikartojančios raidės: ${nesikartojancios}`);
console.log(`Unikalios: ${unikalios}`);
//-----------------------------------------------------------------------------------------
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

let first = [];
let second = [];

for (let i = 0; i < 100; i++) {
    first.push(rand(100,999));
    second.push(rand(100,999));
}
console.log("Pirmas masyvas: ↓")
console.log(first);
console.log("Antras masyvas: ↓")
console.log(second);

const uniqueFirst = [...new Set(first)];
const uniqueSecond = [...new Set(second)];
// const firstSet = new Set(first);
// const uniqueFirst = firstSet.from(firstSet);
// const secondSet = new Set(second);
// const uniqueSecond = secondSet.from(secondSet);

console.log(`Pirmas masyvas: ${uniqueFirst}`);
console.log(`Antras masyvas: ${uniqueSecond}`);



//------------------------------------------------------------
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

console.log("Masyvas iš pirmo raidžių masyvo, bet nėra trečiame masyve");

// Function for finding elements 
// which are there in a[] but not
// in b[].
function findMissing(a,b,n,m) {
    for (let i = 0; i < n; i++)
    {
        let j;
        for (j = 0; j < m; j++) {
            if (a[i] == b[j])
                break;
        }
        if (j == m) console.log(a[i] + " ");
    }
}

const n = raidziuMasyvas1.length;
const m = raidziuMasyvas3.length;
const inFirstButButInThird = findMissing(raidziuMasyvas1, raidziuMasyvas2, n, m);
console.log(inFirstButButInThird);
