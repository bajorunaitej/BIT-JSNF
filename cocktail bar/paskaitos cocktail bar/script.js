const cocktailNameFilterElement = document.querySelector('#cocktailName');
const categorySelectName = document.querySelector('#categorySelect');
const glassSelectName = document.querySelector('#glassTypeSelect');
const ingredientSelectName = document.querySelector('#ingredientSelect');
const dyanmicDrinkElement = document.querySelector('.drinks');

const supriseMeButton = document.querySelector('#supriseMe');

const categoriesArray = [], drinksArray = [];

async function fillSelelctElement() {
    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then((response) => response.json())
    .then((response) => {
        fillCategorySelect(response.drinks, categorySelectName, "strCategory")
        //Map metodas gražina is objekto masyvo objekto laukus strCategory
        categoriesArray.push(
            ...response.drinks.map((value) => value.strCategory)
        );
    })
    .catch((error) => console.log(error))

    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((response) => response.json())
    .then((response) => fillCategorySelect(response.drinks, glassSelectName, "strGlass"));

    await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((response) => response.json())
    .then((response) => fillCategorySelect(response.drinks, ingredientSelectName, "strIngredient1"))

}

function fillCategorySelect(properties, selectElement, strFieldName) {
    let dynamicHTML = '';
    for(const property of properties) {
        dynamicHTML += `<option>${property[strFieldName]}</option>`
        //categoriesArray.push(property.strCategory)
    }
    selectElement.innerHTML = dynamicHTML;
    // console.log(categoriesArray);
}

async function getAllDrinks() {
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    for(const category of categoriesArray) {
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(' ', '_')}`;
        const response = await fetch(dynamicUrl);
        const answerFromServer = await response.json();
        for(const drink of answerFromServer.drinks) {
            drinksArray.push(drink);
        }
        // drinksArray.push(answerFromServer);
        // console.log(answerFromServer);
    }
}

function generateDrinksHTML(drinks) {
    let dynamicHTML = '';

    for(let drink of drinks) {
        dynamicHTML += `<div class="drink">
        <img src="${drink.strDrinkThumb}" alt="">
        <h2 class="drinkTitle">${drink.strDrink}</h2>
    </div>`;
    }
    dyanmicDrinkElement.innerHTML = dynamicHTML;
}
//1. Select'ų užpildymas duomenimis → Done
//2. Gauname visus gėrimus iš API → Done
//3. Juos atvaizduoti → Done
//4. Atlikti filtracijas kokteiliams
//5. Paieška pagal pavadinimą
//6. Modalinio lango sūkurimas
//7. Modalinio lango uždarymas
//8. Atsitiktinio kokteilio gavimas su mygtuku www.thecocktaildb.com/api/json/v1/1/random.php


async function initialisation() {
    //1. selectu užplidymas
    await fillSelelctElement();
    console.log(categoriesArray);
    await getAllDrinks();
    generateDrinksHTML(drinksArray);
    console.log(drinksArray);
    //2.dinaminis gerimu atvaizdavimas
}
initialisation();