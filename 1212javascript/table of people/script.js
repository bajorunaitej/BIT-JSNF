const people = [];
let currentNumeration = 1;

const buttonElement = document.querySelector('#addButton');
// const buttonElement = document.getElementById(addButton);
// const buttonElement = document.querySelectorAll(button);

buttonElement.addEventListener('click', ()=>{
    const person = {};
    person.firstName = document.getElementById('firstNameInput').value;
    person.lastName = document.getElementById('lastNameInput').value;
    person.age = document.getElementById('ageInput').value;
    person.nationality = document.getElementById('nationalityInput').value;
    person.number = currentNumeration;
    currentNumeration++;

    console.log(person);
    people.push(person);
    generateTableContent(people);
});

function generateTableContent(people) {
    let dyanmicHTML = ``;
    for(let person of people) 
    {
        dyanmicHTML = `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
    }

    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = dyanmicHTML;
}