function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let t1 = rand(-10,25);
let t2 = rand(-10,25);
let t3 = rand(-10,25);

let teig = 0;
let neig = 0;

console.log(t1, t2, t3);

if(t1===t2===t3) console.log('Visas dienas temperatūra buvo vienoda');

if(t1>=0) teig++;
else neig++;

if(t2>=0) teig++;
else neig++;

if(t3>=0) teig++;
else neig++;

console.log(`${teig} dienas /-ų buvo teigiama, ${neig} - neigiama.`);

