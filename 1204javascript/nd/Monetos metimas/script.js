function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
console.log('Monetos metimas: ');
// console.log('a) Iškrito herbas ↓');
//----------------------------------------------------------------
// let moneta = rand(0,1);
// if (moneta === 0) console.log(`H: ${moneta}`)
// if (moneta === 1) console.log(`S: ${moneta}`)

// while (moneta === 0) {
//     console.log('Iškrito herbas');
//     break;
// }
//----------------------------------------------------------------
// console.log('b) Tris kartus iškritus herbui ↓');
// let herbas = 0;

// while(herbas < 3) {
//     let moneta = rand(0,1);
//     if (moneta === 0) {
//         console.log(`H: ${moneta}`);
//         herbas++;
//     }
//     else {
//         console.log(`S: ${moneta}`);
//         herbas = 0;
//     }
//     break;
// }
// console.log(`Herbas iškrito ${herbas} kartus`);


