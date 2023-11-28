// console.error('bloga zinute');

let x = 10;

// Informacijos išvedimas į konsolę
console.log(x);


// aritmetiniai operatoriai + - * /, liekana - %
x = x % 3;
console.log(x);

// kitas būdas kaip aprašyti aritmetinę operaciją
x += 5;
console.log(x);

// x += 'Lorem ipsum';

// Kondicinis patikrinimas
let loginisPatikrinimas = x < 5;
console.log(loginisPatikrinimas);
console.log(typeof loginisPatikrinimas);

if(loginisPatikrinimas)
{
    console.log(typeof x);
    console.log(x); 
} else{
    console.log('x yra daugiau nei 5')
}


// typeof - tikrina duomenų tipą
// console.log(typeof x);
// console.log(x);

console.log("---------------------------------")
let tekstas = "labass";
// === sulyginimo operatorius (griežtas tikrinimas - duomenų)
if(tekstas == 'labas') {
    console.log('tekstas yra labas')
}

// !== operatorius - nelygu
if (tekstas !== "labas") {
    console.log('tekstas nera lygus labas')
}

let skaicius = "5";

// == operatorius, netikrinantis duomenų tipo, tačiau tikrinantis duomenų reikšmę
if(skaicius == 5) {
    console.log('skaicius yra 5')
}

// if(1) {
//     // dėl šios eil. iškrenta error, nes kintamasis nebuvo rastas
//     console.log(tiesa)
// }

let eilerastis = "lorem ipsum dolor sit amet";

console.log(eilerastis);

eilerastis += ' consecteur';

console.log(eilerastis);

// jei prie skaičiaus yra pridedamas tekstas, galutinis tipas yra string'as
skaicius = 5;
skaicius += 'abc';

let kintamasis = 'CHICKEN';
console.log(kintamasis[0]);
console.log(kintamasis[1]);
console.log(kintamasis[2]);
console.log(kintamasis[3]);
console.log(kintamasis[4]);
console.log(kintamasis[5]);
console.log(kintamasis[6]);


console.log(skaicius);
console.log(typeof skaicius);

console.log(kintamasis.length)