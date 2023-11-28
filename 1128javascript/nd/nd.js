// 1.--------------------------------------
let vardass = 'Jessica';
let pavardee = 'Parker';

// let length1 = vardas.length;
// let length2 = pavarde.length;

if(vardass.length > pavardee.length) {
    console.log('1. ' + vardass)
} else {
    console.log('1. ' + pavardee)
}

// 2.-------------------------------------------

let vardas = 'Jorė',
    pavarde = 'Jorūnė',
    gimMetai = 1845,
    rndmMetai = 2023;


console.log('2. ' + 'Aš esu ' + vardas + ' ' + pavarde + '. ' + 'Man yra ' + (rndmMetai-gimMetai) + ' metai')

// 3.------------------------------------------

let vaardas = 'Jorė';
let paavarde = 'Jorūnė';

let inicialai = vaardas[0] + paavarde[0];
console.log('3. ' + inicialai);


// 4. ------------------------------------------

let last3Letters = vardass.slice(-3) + pavardee.slice(-3);
console.log('4. ' + last3Letters);

// 5. -------------------------------------------

function getMonthFromDate(date) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
const monthIndex = date.getMonth();
return months[monthIndex];
}
const d = new Date("2023-11-28");
const month = getMonthFromDate(d);
console.log('5. ' + month);
