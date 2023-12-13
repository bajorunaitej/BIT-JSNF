console.log([document]);

const divas = document.querySelector(".vienas");
divas.className = "trys du vienas";
console.log([divas]);

// const spanas = divas.children[2];
// console.log([spanas]);

const buttonas = divas.children[2].children[0];
buttonas.innerText = 'Kitas tekstas';

//Galime manipuliuoti elementu norint, kad jis būtų pasislėpęs arba kad jis atsirastų
divas.hidden = true;