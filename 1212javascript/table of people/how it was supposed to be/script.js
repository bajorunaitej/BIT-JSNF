const people = [];
let currentNumeration = 1;

const possibleNationalities = ['Lithuanian', 'Latvian', 'German']

//Button elemento gavimas:
const addingButtonElement = document.querySelector("#add-button");
// const addingButtonElement = document.getElementById('add-button');
// const addingButtonElement = document.querySelectorAll('button');

//Validacijos
function validateFirstName(name) {
    let isValid = true;
    //tikrinima ar name reikšmė nėra undefined, null, false arba tuščia
    if(!name) { 
        isValid = false;
    }
    if(!/[0-9]/.test(name) || /[@#$%^&*+?(),./]/.test(name)) {
        isValid = false;
    }
    return isValid;
    

//     //1. Ar apskritai jis egzist.
//     //2. Ar turi skaičių - jei tiap grąžinti false
//     //3. Ar turi specialiųjų simbolių
//     //Validavimas su regexu ↓
//     ///[a-z][A-Z]/.test(firtName) - grąžina boolean reikšmę - tikriname ar praeina testą
//     //True arba False reikšmė
}
function validateAge(age) {
    let isValid = true;
    if(!age) isValid = false;
    if(isNaN(parseInt(age))) isValid = false;
    if(age < 0 || age > 150) isValid = false;
    if(age % 1 !== 0) isValid = false;
    return isValid;
}
function isValidNationality(nationality) {
    console.log(possibleNationalities.includes(nationality));
    return possibleNationalities.includes(nationality);
}

//Priddėjimas
addingButtonElement.addEventListener("click", () => {
	const person = {};

	//Objekto person laukui - priskiriama inpute įvesta reikšmė
	person.firstName = document.getElementById("firstNameInput").value;
	person.lastName = document.getElementById("lastNameInput").value;
	person.age = document.getElementById("ageInput").value;
	person.nationality = document.getElementById("nationalityInput").value;
	person.number = currentNumeration;

    //Vyksta patikrinimas ar reikšmės yra tuščios
    if(!validateFirstName(person.firstName) || 
        !validateFirstName(person.lastName) || 
        !validateAge(person.age) || 
        !isValidNationality(person.nationality)) {
        alert("Prašome užpildyti visus laukus");
        return;
    }

	//Naujai sukurtas objektas pridedamas prie masyvo
	people.push(person);
	//Numeracija padideja
	currentNumeration++;
	//Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
	generateTableContent(people);
});

//HTML contento generavimas
function generateTableContent(people) {
	//Dinaminio HTML kodas
	let dynamicHTML = ``;

	for (let person of people) {
		//Įvyksta pridėjimas prie stringo, pridedame reikšmes dinamiškai:
		dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
	}
	//Gaunamas tbody elementas
	const tbody = document.querySelector("table tbody");
	//Jo reikšmė tampa dinaminio html kodas
	tbody.innerHTML = dynamicHTML;
}

const removingButtonElement = document.querySelector('#remove-button');

removingButtonElement.addEventListener('click', () => {
    const removeElementInput = document.querySelector('#number');
    let number = +removeElementInput.value; //iš input visada ateina tekstas
    removeElementInput.value = '';

    //findIndex grąžina indeksą pagal elem. reikšmę, jei toks elem. nebuvo rasta - grąžina -1
    let foundIndex = people.findIndex((person) => person.number === number)

    if(foundIndex === -1) {
        alert('Žmogaus su tokiu indeksu nėra');
        return;
    }
    people.splice(foundIndex, 1);
    console.log(people);
    generateTableContent(people);

    //foundPerson.number - pasiekti objekto lauką
});