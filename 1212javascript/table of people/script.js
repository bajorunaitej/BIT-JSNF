const people = [];
let currentNumeration = 1;

//Button elemento gavimas
const buttonElement = document.querySelector('#add-button');
// const buttonElement = document.getElementById(addButton);
// const buttonElement = document.querySelectorAll(button);
const formElement = document.querySelector('#form');

buttonElement.addEventListener('click', () => {
    const person = {};

    //Objekto person laukui - priskiriama inpute įvesta reikšmė
    person.firstName = document.getElementById("firstNameInput").value;
    person.lastName = document.getElementById("lastNameInput").value;
    person.age = document.getElementById("ageInput").value;
    person.nationality = document.getElementById("nationalityInput").value;
    person.number = currentNumeration;

    if(!person.firstName || !person.lastName || !person.age || !person.nationality) {
        alert("Everything must be filled out");
        return;
    }

    //Naujai sukurtas objektas pridedamas prie masyvo
    people.push(person);
    //Numeracija padidėja
    currentNumeration++;
    //Naujai pergeneruojama lentelė pagal visas masyvo reikšmes
    generateTableContent(people);

    //Pašalinti input'us po insert'o;
    formElement.reset();
});

function generateTableContent(people) {
    //Dinaminio HTML kodas
    let dyanmicHTML = ``;
    for(let person of people) {
        //Įvyksta pridėjimas prie stringo, pridedame reikšmes dinamiškai:
        dyanmicHTML += `<tr>
    <td>${person.number}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.age}</td>
    <td>${person.nationality}</td>
    </tr>`;
    }
    //Gaunamas tbody elementas
    const tbody = document.querySelector('table tbody');
    //Jo reikšmė tampa dinaminio html kodas
    tbody.innerHTML = dyanmicHTML;
}
const removeButton = document.querySelector('#remove-button');
removeButton.addEventListener('click', () => {
    const numberInput = document.querySelector("#numberInput").value;

    if(isNaN(numberInput) || numberInput <= 0 || numberInput > people.length) {
        alert('Please enter  a valid person number to remove.');
        return;
    }

    const indexToRemove = people.findIndex(person => person.number === numberInput);

    if(indexToRemove !== -1) {
        people.splice(indexToRemove, 1);
        currentNumeration--;
        generateTableContent(people);
    }
    else{
        alert('Person not found with the specified number.');
    }
    // //Pašalinti eilutę su nurodytu numeriu
    // people.slice(numberInput - 1, 1);
    // currentNumeration--;
    // generateTableContent(people);

    numberInput = '';
})
