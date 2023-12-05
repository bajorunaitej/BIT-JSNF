let naujasMasyvas = [8, 7, 3, 46, 9, 7];

//Elemento pridėjimas prie masyvo
naujasMasyvas.push(',');
console.log(naujasMasyvas);

//Elemento ištrynimas nuo pabaigos
naujasMasyvas.pop();
console.log(naujasMasyvas);

//Elemento ištrynimas iš priekio
naujasMasyvas.shift();
console.log(naujasMasyvas);


//Elemento ištrynimas iš vidurio

//Elemtento šalinimas pagal indeksą
//masyvoPavadinimas.splice(nuoKur, Kiek)

// naujasMasyvas.splice(-3);
naujasMasyvas.splice(3, 1);
console.log(naujasMasyvas);

//elemento pridėjimas į priekį
naujasMasyvas.unshift(12);
console.log(naujasMasyvas);

//Masyvo el. atspausdinimas pasinaudojant delimiteriu
console.log(naujasMasyvas.join(' -> '));
// console.log("<li>" + naujasMasyvas.join("</li><li>") + "</li>");

//Masyvo aspukimas atvirkščiai:
naujasMasyvas.reverse();
console.log(naujasMasyvas);


//filtravimas

//Išfiltruokite iš masyvo visus skaicius, kurie dalinai iš 2;
for(let i = 0; i < naujasMasyvas.length; i++)
{
    if(naujasMasyvas[i] % 2 === 0) {
        naujasMasyvas.splice(i, 1);
        i--;
    }
}
console.log(naujasMasyvas.join(' , '));



