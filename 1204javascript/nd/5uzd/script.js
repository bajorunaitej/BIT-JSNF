function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// let skaiciai = '';

// for(i = 0; i < 3000; i++) {
//     if(i % 77 === 0) skaiciai++;
//     if(i) {
//         skaiciai += i;
//     }else {
//         skaiciai += ',' + i;
//     }
// }
// document.write(skaiciai);

let numberString = '';

for (let i = 1; i <= 3000; i++) {
    if (i % 77 === 0) {
        if (numberString !== '') {
            numberString += ','; // Pridedame kablelį tik jeigu tai ne pirmas skaičius
        }
        numberString += i;
    }
}

document.write(numberString);