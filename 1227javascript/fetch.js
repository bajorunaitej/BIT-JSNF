fetch('https://dog.ceo/api/breeds/image/random')
    .then((atsakymas) => atsakymas.json()) //gaunas atsakymas iš serverio. Atsakymas konvertuojamas į tekstą
    .then((atsakymas) => document.write(`<img src='${atsakymas.message}'/>`)); //Iškoduotas atsakymas yra panaudojamas


    fetch('https://dog.ceo/api/breeds/list/all')
    .then((atsakymas) => atsakymas.json()) //gaunas atsakymas iš serverio. Atsakymas konvertuojamas į tekstą
    .then((atsakymas) => console.log(atsakymas)); //Iškoduotas atsakymas yra panaudojamas
