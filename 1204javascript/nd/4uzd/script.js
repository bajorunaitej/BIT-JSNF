function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let countAbove150 = 0;

for(i = 0; i < 300; i++) {
    let number = rand(0,300);
    let numberColor = rand > 275 ? 'red' : 'black';

    document.write(`<span style="color: ${numberColor};">${number}</span>`);

    if(number > 150) {
        countAbove150++
    }
}
document.write(`<p>Count of numbers above 150: ${countAbove150}</p>`);