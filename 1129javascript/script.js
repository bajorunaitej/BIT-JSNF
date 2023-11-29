let imone = "UAB \"Artaleka\"";
console.log(imone);


let imone1 = "UAB\t\"Artaleka\"";
let imone2 = "MB\t\"Softo fabrikas\"";
console.log(imone1)
console.log(imone2)

let imoniuSarasas = imone1 + '\n' + imone2;

console.log(imoniuSarasas);
// imoniuSarasas = '${imone1}\n${imone2}';

// Duomenu tipo keitimas

let skaiciausTekstas = '12.7';

// parseInt(skaiciausTekstas) funkcija, gauna tik sveikuosius skiacius
skaicius = parseInt(skaiciausTekstas);
console.log(skaicius);

// Unary operator:
skaicius = +skaiciausTekstas;
console.log(skaicius);

// Number funkcija:
skaicius = Number(skaiciausTekstas);
console.log(skaicius); //12.7


// Math biblioteka

let roundedSkaicius = Math.round(skaicius);
console.log('Suapvalinta reikšmė:' + roundedSkaicius);

roundedSkaicius = Math.floor(skaicius);
console.log('Suapvalinta reikšmė į maž. pusę: ' + roundedSkaicius);

roundedSkaicius = Math.ceil(skaicius);
console.log('Suapvalinta reikšmė į didž. pusę: ' + roundedSkaicius);

//Skaiciaus konvertavimas į string duomenų tipą;
//12.70
let valiuta = skaicius.toFixed(2);
console.log(+valiuta);

let tekstasSkaicius = skaicius + '';
console.log(typeof tekstasSkaicius + ' - jo reikšmė ' + tekstasSkaicius);

tekstasSkaicius = skaicius.toString();
tekstasSkaicius = String(skaicius);
