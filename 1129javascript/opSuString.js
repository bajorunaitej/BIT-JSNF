let eilerastis = "Ruošėsi ožys ganytis, žolę žlemšti, miške vartytis";
console.log(eilerastis);

//Tekstao paieška pasinaudojant indexOf() metodu. 
//Jei tekstas nerandamas, grąžinama reikšmė -1

//Ieškoma nuo pradžios
let ozysPosition = eilerastis.indexOf('ožys');
console.log(ozysPosition);

//Ieškoma nuo pabaigos
ozysPosition = eilerastis.lastIndexOf('ožys');
console.log(ozysPosition);


//Pasinaudojant gauta teksto pozicija, galime gauti žodį ožys su
//substring() metodu

let ozysText = eilerastis.substring(ozysPosition, ozysPosition + 4);
console.log(ozysText);

let kitasGyvunas = 'avinas';
//teksto keitimas (pakeičia visus)
let kitasEilerastis = eilerastis.replaceAll('ožys', kitasGyvunas);
console.log(kitasEilerastis);

//teksto keitimas (pakeičia vieną - pirmą)
let kitasEilerastis1 = kitasEilerastis.replace('avinas', 'šuo');
console.log(kitasEilerastis1);

//teksto keitimas į didž. raides
let eilerastisDidz = eilerastis.toUpperCase();
console.log(eilerastisDidz);

//teksto keitimas į maž. raides
let eilerastisMaz = eilerastis.toLowerCase();
console.log(eilerastisMaz);

//Slice() metodas
let text = 'Apple, Banana, Kiwi';

let part = text.slice(7,13);
console.log(part);

part = text.slice(0,-6);
console.log(part);

part = text.slice(7); //simbolių pašalinimas nuo pradžios iki ...
console.log(part);

if(eilerastis.includes('ganytis'))
{
    console.log('kintamajame -eileraštis- yra žodis: ganytis');
}
else {
    console.log('tokio žodžio nėra');
}


function rand(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let skaicius = rand(97,120);
console.log(skaicius);

console.log(String.fromCharCode(skaicius));