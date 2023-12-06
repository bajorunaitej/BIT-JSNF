function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų
console.log('5. 100 atsitiktinių sk., !∃ nuo 40 iki 60');

let masyvas = [];
for (let i = 0; i < 100; i++) {
    masyvas.push(rand(0,100));
}
console.log(masyvas);
for(let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] < 40) {
        masyvas.splice(i, 1);
        i--;
    }
}
console.log(masyvas);

// Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;

console.log('6. Lyginiai - žaliai, nelyginiai - raudoni')
document.write('<div>');
for (let i = 0; i < masyvas.length; i++) {
    if(masyvas[i] % 2 === 0) {
        document.write(`<span style="color:green;">${masyvas[i]} </span>`);
    }else{
        document.write(`<span style="color:red;">${masyvas[i]} </span>`);
    };
}
document.write('</div>');

// -----------------------------------------------------------------------------
// Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šių skaičių vidurkį.
console.log('7. 80 atsitiktinių sk. nuo 8 iki 32. Jų vidurkis.');

let sk = [];
let suma = 0;
for (let i = 0; i < 80; i++) {
    sk.push(rand(8, 32));
}
for (let i = 0; i < sk.length; i++) {
    suma += sk[1];        
}
console.log('Skaičiai:');
console.log(sk);
console.log('Vidurkis: ' + suma/sk.length);

//-----------------------------------------------------------
//Sukurti du kintamuosius a = 5 bei b = 20; Nepasinaudojant trečiu kintamuoju, apkeisti šių dviejų kintamųjų reikšmes vietomis;

 
console.log('Reikšmių sukeitimas vietomis ↓')
let a = 5,
    b = 20;
console.log('a: ' + a + ', ' + 'b: ' + b);
b = [a, a = b][0];
console.log('a: ' + a + ', ' + 'b: ' + b);
