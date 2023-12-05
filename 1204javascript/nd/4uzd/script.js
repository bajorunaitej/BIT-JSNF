function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let x = 0;
let randomNumber = 0;
for (i = 0; i < 300; i++) {
    randomNumber = rand(0,300);
    if(randomNumber > 150) x++;
    if(randomNumber > 275) color="red";
    else color='black';

    document.write(`<span style="color:${color};">${randomNumber}, </span>`);
}

document.write("<br>Skaičių virš 150: " + "\n" + x);


// let countAbove150 = 0;

// for(i = 0; i < 300; i++) {
//     let number = rand(0,300);
//     let numberColor = rand > 275 ? 'red' : 'black';

//     document.write(`<span style="color: ${numberColor};">${number}</span>`);

//     if(number > 150) {
//         countAbove150++
//     }
// }
// document.write(`<p>Count of numbers above 150: ${countAbove150}</p>`);