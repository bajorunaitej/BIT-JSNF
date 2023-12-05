function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Užduotis: sukurkite fibonacci skaičių seką susidarančią iš 50 skaičių.

let fibonacci = [0,1];

// /elemento pridėjimass į masyvo vietą pagal indeksą
// fibonacci[2]=fibonacci[0]+fibonacci[1];

// elemento pridėjimas prie masyvo galo
// fibonacci.push(fibonacci[1]+fibonacci[0])

for(let i = 2; i < 50; i++) {
    // fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
}
console.log(fibonacci);

// masyvo su atsitiktinėmis reikšmėmis generavimas. 10 reikšmių

let skaiciai = [];
for (let i = 0; i < 10; i++) {
    const randomsSK = rand(0,10);
    skaiciai.push(randomsSK);
    // skaiciai[i] = randomsSK;
}
console.log(skaiciai);

//atspausdinti tas reikšmes, kurios yra nelyginės

for(let i = 0; i < skaiciai.length; i++) {
    console.log(i + 1 + ' apsisukimas: skaicia[i] = ' + skaiciai[i])
    if(skaiciai[i] %2 !== 0){
        console.log(skaiciai[i]);
    }
}


//Atspausdinti visas masyvo 'skaiciai' reiksmes
// console.log("---------------------------------------")
// i=0;
// while(i<skaiciai.length) {
//     console.log(skaiciai[i]);
//     i++
// }
// console.log("---------------------------------------")

// for(let i = 0; i < skaiciai.length; i++){
//     console.log(skaiciai[i]);
// }

//suskaičiuoti kiek masyve yra elementų su reikšme '2'?
let countOfTwos = 0;
for(let i = 0; i < skaiciai.length; i++) {
    if(skaiciai[i]===2) countOfTwos++;
}

console.log(skaiciai, "Dvejetai: " + countOfTwos);

//suskaičiuoti kiek masyve yra el. mažesnių už 5
let lessThen5 = 0;

for(let i = 0; i< skaiciai.length; i++) {
    if(skaiciai[i] < 5) lessThen5++;
}
console.log(skaiciai, "Mažiau už 5: " + lessThen5);

//suskaičiuokite kiek masyve yra el.mažesnių 3 arba didesnių nei 7

let counter = 0;
for(let i = 0; i < skaiciai.length; i++) {
    if(skaiciai[i] < 3 || skaiciai[i] > 7) counter++;
}
console.log(skaiciai, "Mažiau nei 3 arba daugiau nei 7: " + counter);
