if (!localStorage.getItem('people')) {
    //JSON.stringify paverčia objektinį kintamąjį į string'ą
    localStorage.setItem('people', JSON.stringify([]));
}

//JSON.parse() paverčia sttring kintamąjį į objektą
const people = JSON.parse(localStorage.getItem('people'));
generateTableContent(people);

if(!localStorage.getItem('currentNumeration'))
    localStorage.setItem('currentNumeration', '1');
let currentNumeration = +localStorage.getItem('currentNumeration');

// Elementų apsirašymas
const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const ageInput = document.getElementById('ageInput');
const nationalityInput = document.getElementById('nationalityInput');

//Elementų pašalinimui
const removeElementInput = document.querySelector('#number');

//Elementų atnaujinimui
const idInputUpdate = document.getElementById('idInputUpdate');
const firstNameInputUpdate = document.getElementById('firstNameInputUpdate');
const lastNameInputUpdate = document.getElementById('lastNameInputUpdate');
const ageInputUpdate = document.getElementById('ageInputUpdate');
const nationalityInputUpdate = document.getElementById('nationalityInputUpdate');

//Buttton elemento gavimas:
const addingButtonElement = document.querySelector('#addButton');
// const addingButtonElement = document.getElementById('add-button');
// const addingButtonElement = document.querySelectorAll('button');

//Validacijos
function validateName (name) {
    //boolean reikšmė
    let isValid = true;

    //tikriname ar name reikšmė nėra undefined, tikriname ar praeina testą
    if(/[0-9]/.test(name) || /[!@#$%^&*()?/.,]/.test(name)) {
        console.log("regex");
        isValid = false
    }
    return isValid;
}

function validateAge(age) {
    let isValid = true;

    if(!age) isValid = false;

    if(isNaN(parseInt(age))) isValid = false;

    if(age < 0 || age > 150) isValid = false;

    if(age % 1 !== 0) isValid = false;

    return isValid;
}

//reikšmių nusinulinimas
function nullifyInputValues() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    nationalityInput.value = '';
}

//pridėjimas

addingButtonElement.addEventListener('click', () => {
    const person = {};

    //Objekto person laukui - priskiriama input'e įvesta reikšmė
    person.firstName = firstNameInput.value;
    person.lastName = lastNameInput.value;
    person.age = ageInput.value;
    person.nationality = nationalityInput.value;
    person.number = currentNumeration;

    nullifyInputValues();

    //Įvyksta patikrinimas ar įvedtos reikšmės yra tuščios
    if(!validateName(person.firstName) ||
        !validateName(person.lastName) ||
        !validateAge(person.age)) {
            alert('Prašome užpildyti visus laukus teisingai!');
            return;
        }
    
        //Naujai suskurtas objektas pridedamas prie masyvo
        people.push(person);

        //Numeracija padidėja
        currentNumeration++;
        localStorage.setItem('currentNumeration', '' + currentNumeration);

        //Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
        generateTableContent(people);
        localStorage.setItem('people', JSON.stringify(people));
});

//HTML content'o generavimas
function generateTableContent(people) {
    //Dinaminio HTML kodas
    let dynamicHTML = '';
    for(let person of people) {
        //Įvyksta pridėjimas prie string'o, pridedame reikšmes dinamiškai:
        dynamicHTML += `<tr>
    <td>${person.number}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.age}</td>
    <td>${person.nationality}</td>
    </tr>`;
    }

    //Gaunamas tbody elementas
    const tbody = document.querySelector('table tbody');

    tbody.innerHTML = dynamicHTML;
}

const removingButtonElement = document.querySelector('#removeButton');

removingButtonElement.addEventListener('click', () => {
    let number = +removeElementInput.value; //iš input'ų visada ateina tekstas
    removeElementInput.value = '';
    
	// console.log(number);
	// console.log(people[0].number);

    //findIndex() grąžina indeksą pagal elemento reikšmę. Jei toks elementas nebuvo rastas, grąžina -1.
    let foundIndex = people.findIndex((person) => person.number === number);

    if(foundIndex === -1) {
        alert('Žmogaus su tokiu numeriu nėra');
        return;
    }

    people.splice(foundIndex, 1);
    // console.log(people);
    generateTableContent(people);
    localStorage.setItem('people', JSON.stringify(people));
});

document
    .querySelector('[value="Update"]')
    .addEventListener('click', (event) => {
        event.preventDefault();
        const foundIndex = people.findIndex(
            (val) => val.number === +idInputUpdate.value
        );
        if(foundIndex === -1) {
            alert('Žmogaus su tokiu numeriu nėra');
            return;
        }

        const person = people[foundIndex];
        if(
            !validateName(firstNameInputUpdate.value) ||
			!validateName(lastNameInputUpdate.value) ||
			!validateAge(ageInputUpdate.value)
        ) {
            alert('Prašome užpildyti visus laukus teisingai!');
        }

        people[foundIndex] = {
            number: person.number,
            firstName: firstNameInputUpdate.value,
            lastName: lastNameInputUpdate.value,
            age: ageInputUpdate.value,
            nationality: nationalityInputUpdate.value
        }

        generateTableContent(people);

        firstNameInputUpdate.value = "";
		lastNameInputUpdate.value = "";
		ageInputUpdate.value = "";
		nationalityInputUpdate.value = "";

        localStorage.setItem('people', JSON.stringify(people));
    });