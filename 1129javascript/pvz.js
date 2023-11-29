let vardas = 'John', pavarde = 'Depp';

// Sudarysime kintamąjį iš primų dviejų vardo ir 
// paskutinių dviejų pavardės raidžių

let inicialai = vardas[0] + vardas[1] + pavarde[2] + pavarde[3];
let inicialai1 = vardas[0] + vardas[1] + pavarde[pavarde.length-2] + pavarde[pavarde.length-1];
console.log(inicialai);
console.log(inicialai1);


// slaptažodžio ilgumas

let password = 'ledinukas';

if(password.length >= 8) {
    console.log('Slaptazodis tinkamas')
}
else{
    console.log('Slaptazodis per trumpas')
}

// savaitės diena

let diena = 4;
if(diena === 1) {
    console.log('pirmadienis');
}
else if(diena === 2){
    console.log('antradienis');
}
else if(diena === 3){
    console.log('trečiadienis');
}
else if(diena === 4){
    console.log('ketvirtadienis');
}
else if(diena === 5){
    console.log('penktadienis');
}
else if(diena === 6){
    console.log('šeštadienis');
}
else if(diena === 7){
    console.log('sekmadienis');
}
else{
    console.log('Tokia diena !E');
}

if(diena <= 7 && diena >= 1){
    if(diena % 2 === 0) {
        console.log('diena lyginė')
    }
    else{
        console.log('diena nelyginė')
    }
}