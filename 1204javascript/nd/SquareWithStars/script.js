// Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

let stars = "";

for (let i = 0; i < 100; i++) {
    stars += '*';
    if((i + 1) % 10 === 0) {
        stars += '<br>';
    }
}
document.write(`<p style="margin:5px">${stars}</p>);
