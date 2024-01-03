const cocktailNameFilterElement = document.querySelector('#cocktailName');
const categorySelectName = document.querySelector('#categorySelect');
const glassSelectName = document.querySelector('#glassTypeSelect');
const ingredientSelectName = document.querySelector('#ingredientSelect');
const dyanmicDrinkElement = document.querySelector('.drinks');
const buttoneSearch = document.querySelector('#search');

const supriseMeButton = document.querySelector('#supriseMe');
// const modal = document.querySelector('#modal');
// const closeModal = document.querySelector('.close')

const selectValues = [],
    drinksArray = [];

async function fillSelectElement() {
    const allUrls = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    ];

    const allPromises =allUrls.map(url => fetch(url)
        .then((response) => response.json())
        );
    
    const allValues = await Promise.all(allPromises);
    const [allCategories, allGlasses, allIngredients] = allValues;

    // const [allCategories, allGlasses, allIngredients] = await Promise.all(allPromises);

    selectValues.categories = allCategories.drinks.map(categoryObj => categoryObj.strCategory);
    // console.log(selectValues.categories);
    selectValues.glasses = allGlasses.drinks.map(glassObj => glassObj.strGlass);
    selectValues.ingredients = allIngredients.drinks.map(ingredientObj => ingredientObj.strIngredient1);

    fillCategorySelect(allCategories.drinks, categorySelectName, "strCategory");
    fillCategorySelect(allGlasses.drinks, glassSelectName, "strGlass");
    fillCategorySelect(allIngredients.drinks, ingredientSelectName, "strIngredient1");
}

function fillCategorySelect(properties, selectElement, strFieldName) {
    let dynamicHTML = '';
    for(const property of properties) {
        dynamicHTML += `<option>${property[strFieldName]}</option>`;
    }
    selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
    for(const category of selectValues.categories) {
        // console.log(`${category} ←`);
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(' ','_')}`;
        const response = await fetch(dynamicUrl);
        const answerFromServer = await response.json();

        for(const drink of answerFromServer.drinks) {
            drinksArray.push(drink);
        }
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

async function initialisation() {
    // Select'ų užpildymas
    await fillSelectElement();
    console.log(selectValues);
    await getAllDrinks();
    generateDrinksHTML(drinksArray);
};

initialisation();