function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calcDistance (gr1, gr2, laikas) {
    let s = (gr2 - gr1) * laikas;
    return s;
}
let s0 = rand(0,500);
let v1 = rand(30,160);
let v2 = rand(30,160);
let t = rand(0,24);


console.log(`Pirmo automobilio greitis: ${v1} km/h \n
Antro automobilio greitis: ${v2} km/h. \n
Atstumas tarp automobilių: ${s0} km, \n
Kiek laiko važiuoja?: ${t} valandas/-ų`)

if(s0 < 0) console.log(`Automobiliai susitiko po ${calcDistance(v2, v1, t)} km. Pavys`);
else if (s0 === 0) console.log(`Automobiliai važiuoja vienodu greičiu. Niekada nepavys`);
else if(v1 < v2 && s0 > 0) {
    if(calcDistance(v2, v1, t) < 0) {
        console.log (`Antras automobilis aplenkė pirmą ir jie nutolę ${calcDistance(v1, v2, t)} km`)
    } else {
        console.log(`Antras automobilis aplenkė pirmą ir jie nutolę ${calcDistance(v2, v1, t)} km`)
    }
}
else console.log(`Antras automoblis nepasivijo pirmo, dabar atstumas yra ${calcDistance(v2, v1, t)} km`)


// if (v1 > v2 && ) {
//     console.log(`Pirmas automobolis nuvažiavo ${kelias1} km,\nAntras automobilis nuvažiavo ${kelias2} km`)
//     console.log("Antras automobilis niekada nepavys pirmo automobilio.");
// }
// else if(v1 === v2) {
//     console.log(v1 * t)
//     console.log("Važiuoja vienodu greičiu");
// }
// else if(v2 > v1) {
//     if (condition) {
        
//     }

// }