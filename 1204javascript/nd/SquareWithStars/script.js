// Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

// let stars = "";
// for (let i = 0; i < 100; i++) {
//     stars += '*';
//     if((i + 1) % 10 === 0) {
//         stars += '<br>';
//     }
// }
// document.write(`<p style="margin:5px">${stars}</p>`);

//1 lygio ciklas - atspausdins eilutę
let n = 10;
for (let i = 0; i < n; i++) {
    //2 lygio ciklas - atspausdins kvadratą
    for (let j = 0; j < n; j++) {
        if(i === j || i + j + 1 === n) {
        document.write('<span style=\"color:red">*</span>');

        }
        else
        document.write('<span>*</span>');
    }
    document.write('<br>');
    
}