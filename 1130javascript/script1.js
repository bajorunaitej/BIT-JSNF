9//HTML elemento priskyrimas kintamajam


// function pakeistiElemTeksta() {
//     let elementas = document.querySelector('.isskirtinisParagrafas');
//     elementas.innerText = "Koszonom szepen";
// }

// function pakeistiElemTeksta() {
//     let vardoIvestis = document.querySelector('#vardas');
//     let paragrafas = document.querySelector('isskirtinisParagrafas');

//     // elementas.value - iš inputo ištraukia info
//     let dataFromInput = vardoIvestis.value; //reikšmė iš inputo
//     paragrafas.innerText = "Koszonom szepen"; //reikšmė iš inputo priskiriama paragrafui
// }


let loginName = 'Petras';
let password = '123321';

function login() {

    //HTML elemento priskyrimas kintamajam
    let prisijungimoVardoIvestis = document.querySelector('#prisijungimoVardas');
    let prisijungimoSlaptazodzioIvestis = document.querySelector('#prisijungimoSlaptazodis');

    //Reikšmės ištraukimas iš input elementų
    let prisijungimoVardas = prisijungimoVardoIvestis.value;
    let prisijungimoSlaptazodis = prisijungimoSlaptazodzioIvestis.value;

    //Patikrinti ar įvesti duomenys yra teisingi.
    if(loginName === prisijungimoVardas && password === prisijungimoSlaptazodis) {
        console.log('Prisijungetė sėkmingai')
    }
    else {
        console.log('Prisijungimo duomenys klaidingi')

    }
}

let text = 'Kazys1';

if(/[0-9]/.test(text)) {
    console.log('Tekste yra skaičių');
}
else {
    console.log('Tekste nėra skaičių');
    
}