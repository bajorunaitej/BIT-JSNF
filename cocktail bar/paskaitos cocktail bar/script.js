const cocktailNameFilterElement = document.querySelector('#cocktailName');
const categorySelectName = document.querySelector('#categorySelect');
const glassSelectName = document.querySelector('#glassTypeSelect');
const ingredientSelectName = document.querySelector('#ingredientSelect');
const dyanmicDrinkElement = document.querySelector('.drinks');
const buttoneSearch = document.querySelector('#search');

const modal = document.querySelector('#modalBg');

const supriseMeButton = document.querySelector('#supriseMe');

const selectValues = {},
    drinksArray = [];

async function fillSelelctElement() {
    const allUrls = ["https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", 
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    ];
    
    const allPromises = allUrls.map((url) => 
        fetch(url).then((response) => response.json())
        );
    
    const allValues = await Promise.all(allPromises);
    // console.log(allValues);
    const [allCategories, allGlasses, allIngredients] = allValues;
    selectValues.categories = allCategories.drinks.map(categoryObj => categoryObj.strCategory
        );
    selectValues.glasses = allGlasses.drinks.map(glass => glass.strGlass);
    selectValues.ingredients = allIngredients.drinks.map(
        ingredient => ingredient.strIngredient1);

        

    fillCategorySelect(allCategories.drinks, categorySelectName, "strCategory");
    fillCategorySelect(allGlasses.drinks, glassSelectName, "strGlass");
    fillCategorySelect(allIngredients.drinks, ingredientSelectName, "strIngredient1");
    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    // .then((response) => response.json())
    // .then((response) => {
    //     fillCategorySelect(response.drinks, categorySelectName, "strCategory")
    //     //Map metodas gražina is objekto masyvo objekto laukus strCategory
    //     categoriesArray.push(
    //         ...response.drinks.map((value) => value.strCategory)
    //     );
    // })
    // .catch((error) => console.log(error))

    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    // .then((response) => response.json())
    // .then((response) => fillCategorySelect(response.drinks, glassSelectName, "strGlass"));

    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    // .then((response) => response.json())
    // .then((response) => fillCategorySelect(response.drinks, ingredientSelectName, "strIngredient1"))

}

function fillCategorySelect(properties, selectElement, strFieldName) {
    let dynamicHTML = "";
    for(const property of properties) {
        dynamicHTML += `<option>${property[strFieldName]}</option>`
        //categoriesArray.push(property.strCategory)
    }
    selectElement.innerHTML += dynamicHTML;
    // console.log(categoriesArray);
}
//Refaktorinti!!!
async function getAllDrinks() {
    
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    const categoryDrinksURls = [];
    for(const category of selectValues.categories) {
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(' ', '_')}`;
        categoryDrinksURls.push(dynamicUrl);
        // const response = await fetch(dynamicUrl);
        // const answerFromServer = await response.json();
        // for(const drink of answerFromServer.drinks) {
        //     drinksArray.push(drink);
        // }
        // drinksArray.push(answerFromServer);
        // console.log(answerFromServer);
    }
    const allPromises = categoryDrinksURls.map((url) => fetch(url).then((response) => response.json()));
    const allValues = await Promise.all(allPromises);
    allValues.forEach((value) => drinksArray.push(...value.drinks));
}

function generateDrinksHTML(drinks) {
    let dynamicHTML = "";

    for(let drink of drinks) {
        dynamicHTML += `<div class="drink" onclick ="openModal(${drink.idDrink})">
        <img 
            src="${drink.strDrinkThumb}" alt="">
        <h2 class="drinkTitle">${drink.strDrink}</h2>
    </div>`;
    }
    dyanmicDrinkElement.innerHTML = dynamicHTML;
}
//1. Select'ų užpildymas duomenimis → Done
//2. Gauname visus gėrimus iš API → Done
//3. Juos atvaizduoti → Done
//4. Atlikti filtracijas kokteiliams
//5. Paieška pagal pavadinimą → DONE
//6. Modalinio lango sūkurimas
//7. Modalinio lango uždarymas
//8. Atsitiktinio kokteilio gavimas su mygtuku www.thecocktaildb.com/api/json/v1/1/random.php


async function filter() {
    const searchValue = cocktailNameFilterElement.value,
        category = categorySelectName.value,
        glass = glassSelectName.value,
        ingredient = ingredientSelectName.value;

    let filteredArray = [...drinksArray];
    console.log(filteredArray);

    if(searchValue) 
    {
        filteredArray = filteredArray.filter((drinkObj) =>
            drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    if(category !== "Pasirinkite kategoriją") {
        // console.log(filteredArray);
        // console.log(category);
        const promise = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${category.replaceAll(" ", "_")}`
        );

        const drinksOfCategory = await promise.json();
        filteredArray = filteredArray.filter((drink) => 
            drinksOfCategory.drinks.some(
                (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
            )
        );
    }

    if(glass !== "Pasirinkite stiklinės tipą") {
        const promise = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=${glass.replaceAll(
                " ",
                "_"
            )}`
        );
        const drinksOfGlass = await promise.json();
        filteredArray = filteredArray.filter((drink) =>
            drinksOfGlass.drinks.some(
                (drinkOfGlass) => drink.idDrink === drinkOfGlass.idDrink
            )
        );
    }

    if(ingredient !== "Pasirinkite ingredientą") {
        const promise = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=${ingredient.replaceAll(
                " ",
                "_"
            )}`
        );
        const ingredientsOfGlass = await promise.json();
        filteredArray = filteredArray.filter((ingredient) =>
            ingredientsOfGlass.ingredient.some(
                (ingredientOfGlass) => ingredient.idDrink === ingredientOfGlass.idDrink
            )
        );
    }

    generateDrinksHTML(filteredArray)
}



async function initialisation() {
    //1. selectu užplidymas
    await fillSelelctElement();
    // console.log(selectValues);
    await getAllDrinks();
    generateDrinksHTML(drinksArray);
    buttoneSearch.addEventListener('click', filter);
    // console.log(drinksArray);
    //2.dinaminis gerimu atvaizdavimas
}

async function openModal(id) {
    modal.style.display = "flex";

    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await promise.json();
    const drink = response.drinks[0];
    document.querySelector('.modalImg').src = drink.strDrinkThumb;
    document.querySelector('#modalCategory').innerText = drink.strCategory;
    document.querySelector('#modalAlcohol').innerText = drink.strAlcoholic;
    console.log(drink);
}


function closeModal() {
    modal.style.display = "none";
}
document.querySelector('.modalCloseBtn').onclick = closeModal;
// document.querySelector('#modalBg').onclick = closeModal;

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
});

initialisation();