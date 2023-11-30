function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function categoryFirst(skaicius) {
    let rez = skaicius*3;
    return rez;
}

function categorySecond(skaicius) {
    let rez = (skaicius - 4)**2;
    return rez;
}
function categoryThird(skaicius) {
    let rez = sk + 10;
    return rez;
}

function categoryFourth(skaicius) {
    let rez = 100 - skaicius;
    return rez;
}
function categoryFifth(skaicius) {
    let rez = skaicius/4;
    return rez;
}
sk = rand(0,99);
if (sk <= 5) {
    console.log('Skaičius: ' + sk + ' Kategorija: I, ' + 'Rezultatas: ' + categoryFirst(sk));
} 
else if(sk <= 15) {
    console.log('Skaičius: ' + sk + ' Kategorija: II, ' + 'Rezultatas: ' + categorySecond(sk));
}
else if(sk > 16 && sk <= 30 && sk%5===0) {
    console.log('Skaičius: ' + sk + ' Kategorija: III, ' + 'Rezultatas: ' + categoryThird(sk));

}
else if(sk > 30&& sk <= 45 && sk%2===1) {
    console.log('Skaičius: ' + sk + ' Kategorija: IV, ' + 'Rezultatas: ' + categoryFourth(sk));
}
else{
    console.log('Skaičius: ' + sk + ' Kategorija: V, ' + 'Rezultatas: ' + categoryFifth(sk));
}