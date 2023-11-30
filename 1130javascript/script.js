// and &&
// orr ||

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function categoryOneCalculation(skaicius) {
    let rez = skaicius ** 2;
    return rez;
}

function categoryThirdCalculation(skaicius) {
    let desimtys = +sk.toString()[0];
    let rez = sk - desimtys;
    return rez;
}
function categoryFourthCalculation(skaicius) {
    let vnt = sk % 10;
    let rez = (sk + vnt)/2;
    return rez;
}

function categoryFifthCalculation(skaicius) {
    
}


//nuo 20 iki 50

// if(sk >= 20 && sk <= 50) {
//     console.log('Skaicius papuola į pirmą kategoriją');
// }

// 1.  Salyga. Generuojamas skaičius tarp 0 ir 99;
 
// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
// Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
// Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log()
 
// Kategorija 1: 0 <= skaičius <= 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 10 < skaičius < 20 - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 <= skaičius < 50  ir Skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 <= skaičius < 50  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5: 50 <= skaičius ir skaičius dalinasi iš 3 be liekanos:
// Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
 
// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ: sugeneruotas skaičius: 28
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26

let sk = rand(0,99);
console.log(sk);

if(sk <=10) {
    // let rez = Math.pow(sk,2);
    console.log('Skaičius: ' + sk + ' Kategorija: I, ' + 'Rezultatas: ' + categoryOneCalculationsk);
}
else if(sk < 20){
    console.log('Skaičius: ' + sk + ' Kategorija: II, ' + 'Rezultatas: ' + sk);
}
else if(sk < 50 && sk % 2 === 0){
    // let desimtys = +sk.toString()[0];
    // let rez = sk - desimtys;
    console.log('Skaičius: ' + sk + ' Kategorija: III, ' + 'Rezultatas: ' + categoryThirdCalculation(sk));
}
else if(sk>=20 && sk<50 && sk%2===1) {
    // let vnt = sk % 10;
    // let rez = (sk + vnt)/2;
    console.log('Skaičius: ' + sk + ' Kategorija: IV, ' + 'Rezultatas: ' + categoryFourthCalculation(sk));
}
else if(sk>=50 && sk%3===0) {
    let a=rand(97,122),b=rand(97,122), c=rand(97,122), d=rand(97,122);
    let stringas = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(b);
    console.log('Skaičius: ' + sk + ' Kategorija: V, ' + 'Rezultatas: ' + stringas);
}
else{
    console.log('Skaičius netinkamas nei vienai kategorijai');
}

