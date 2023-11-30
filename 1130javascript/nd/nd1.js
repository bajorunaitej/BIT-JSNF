function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function categoryFirst(skaicius) {
    let rez = skaicius**2;
    return rez;
}
function categoryThird(skaicius) {
    let desimtis = (+skaicius.toString()[0])*10;
    rez = sk - desimtis;
    return rez;
}

function categoryFourth(skaicius) {
    let rez = (skaicius+(+skaicius.toString()[1]))/2
    return rez;
}
function categoryFifth(skaicius) {
    if(skaicius%3===0){
        let a=rand(97,122),b=rand(97,122), c=rand(97,122), d=rand(97,122);
        let stringas = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(b);
        return stringas;
    }
    else{
        console.log('Jokiai kategorijai nepriklauso')
    }
}
sk = rand(0,99);
if (sk <= 10) {
    console.log('Skaičius: ' + sk + ' Kategorija: I, ' + 'Rezultatas: ' + categoryFirst(sk));
} 
else if(sk <= 19) {
    console.log('Skaičius: ' + sk + ' Kategorija: II, ' + 'Rezultatas: ' + sk);
}
else if(sk >= 20 && sk < 50 && sk%2===0) {
    console.log('Skaičius: ' + sk + ' Kategorija: III, ' + 'Rezultatas: ' + categoryThird(sk));

}
else if(sk >= 20 && sk <= 49 && sk%2===1) {
    console.log('Skaičius: ' + sk + ' Kategorija: IV, ' + 'Rezultatas: ' + categoryFourth(sk));
}
else{
    console.log('Skaičius: ' + sk + ' Kategorija: V, ' + 'Rezultatas: ' + categoryFifth(sk));
}