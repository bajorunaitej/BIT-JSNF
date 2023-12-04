function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. ----------------------------------------------------
let line = "Once upon a time in hollywood";
let line1 = line.toLowerCase();
let line2 = line1.replaceAll("o", "*");

console.log(line);
console.log(line1);
console.log(line2);

// 2. ----------------------------------------------------
let first = rand(0, 2),
  second = rand(0, 2),
  third = rand(0, 2),
  forth = rand(0, 2);

numbers = [first, second, third, forth];
console.log(numbers);

let nulis = 0,
  vienas = 0,
  du = 0;

// if(first === 0 ) nulis++;
// else if (first === 1) vienas++;
// else du++

if (first === 0) {
  nulis++;
} else if (first === 1) {
  vienas++;
} else {
  du++;
}

if (second === 0) {
  nulis++;
} else if (second === 1) {
  vienas++;
} else {
  du++;
}

if (third === 0) {
  nulis++;
} else if (third === 1) {
  vienas++;
} else {
  du++;
}

if (forth === 0) {
  nulis++;
} else if (forth === 1) {
  vienas++;
} else {
  du++;
}
console.log("Nuliai: " + nulis);
console.log("Vienetai: " + vienas);
console.log("Dvejetai: " + du);

// 3. ----------------------------------------------------

let pirmas = rand(0, 4),
  antras = rand(0, 4);
console.log(pirmas, antras);
if (pirmas === 0 || antras === 0) {
  console.log("Dalyba iš nulio negalima");
} else if (pirmas === antras) {
  console.log("Abu skaičiai vienodi");
} else if (pirmas > antras) {
  console.log((pirmas / antras).toFixed(2));
} else {
  console.log((antras / pirmas).toFixed(2));
}

// 4. ----------------------------------------------------
let a = rand(0, 25),
  b = rand(0, 25),
  c = rand(0, 25);
// let a = 15, b = 15, c = 20;
console.log(a, b, c);

if ((a < c && a > b) || (a > c && a < b)) {
  console.log(a);
} else if ((b < a && b > c) || (b > a && b < c)) {
  console.log(b);
} else if (a == b || a == c || b == c) {
  console.log("Vidurinės reikšmės nėra");
} else {
  console.log(c);
}

let didz = Math.max(a, b, c),
  maz = Math.min(a, b, c);

if (a !== didz && a !== maz) console.log(a);
else if (b !== didz && b !== maz) console.log(b);
else if (a === b || b === c || a === c) console.log("Vidurinės reikšmės nėra");
else console.log(c);

// 5. ----------------------------------------------------

let sk1 = rand(97, 122),
  sk2 = rand(97, 122),
  sk3 = rand(97, 122);
console.log(
  String.fromCharCode(sk1) + String.fromCharCode(sk2) + String.fromCharCode(sk3)
);

//6. -----------------------------------------------------

let text = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite."

console.log(text);

// let planet = text.replaceAll('{{planet}}','Earth');
// let star = text.replaceAll('{{star}}','Sun');
// let age = text.replaceAll('{{age}}','4.54 billion years');
// let satellite = text.replaceAll('{{satellite}}','moon');

let change = console.log(text.replaceAll('{{planet}}','Earth').replaceAll('{{star}}','Sun').replaceAll('{{age}}','4.54 billion years').replaceAll('{{satellite}}','moon'));

//7. -----------------------------------------------------

function randWithDecimals(min, max) {
  return Number((Math.random() * (max-min) + min).toFixed(2));
}

let skaicius = randWithDecimals(5,20);
console.log(skaicius);

