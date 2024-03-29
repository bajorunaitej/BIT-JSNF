const cocktailNameFilterElement = document.querySelector("#cocktailName");
const categorySelectElement = document.querySelector("#categorySelect");
const glassSelectName = document.querySelector("#glassTypeSelect");
const ingredientSelectName = document.querySelector("#ingredientSelect");
const dyanmicDrinkElement = document.querySelector(".drinks");
const buttoneSearch = document.querySelector("#search");
const lettersSelect = document.querySelector('.letters');
const unsetButton = document.querySelector('.unsetBtn');
const unsetButtonElement = document.querySelector('.unset');

const modal = document.querySelector("#modalBg");
const supriseMeButton = document.querySelector("#supriseMe");

// console.log(document.querySelector('#modalAlcohol').innerText);

const selectValues = {},
  drinksArray = [];

async function fillSelectElement() {
  const allUrls = [
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  ];

  const allPromises = allUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );

  const allValues = await Promise.all(allPromises);
  const [allCategories, allGlasses, allIngredients] = allValues;

  selectValues.categories = allCategories.drinks.map(
    (categoryObj) => categoryObj.strCategory
  );
  // console.log(selectValues.categories);
  selectValues.glasses = allGlasses.drinks.map((glass) => glass.strGlass);
  selectValues.ingredients = allIngredients.drinks.map(
    (ingredient) => ingredient.strIngredient1
  );

  fillCategorySelect(
    allCategories.drinks,
    categorySelectElement,
    "strCategory"
  );
  fillCategorySelect(allGlasses.drinks, glassSelectName, "strGlass");
  fillCategorySelect(
    allIngredients.drinks,
    ingredientSelectName,
    "strIngredient1"
  );
}

function fillCategorySelect(properties, selectElement, strFieldName) {
  let dynamicHTML = "";
  for (const property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
  const categoryDrinksUrls = [];
  for (const category of selectValues.categories) {
    // console.log(`${category} ←`);
    let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
      " ",
      "_"
    )}`;
    categoryDrinksUrls.push(dynamicUrl);
  }
  const allPromises = categoryDrinksUrls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const allValues = await Promise.all(allPromises);
  allValues.forEach((value) => drinksArray.push(...value.drinks));
  //     const response = await fetch(dynamicUrl);
  //     const answerFromServer = await response.json();

  //     for(const drink of answerFromServer.drinks) {
  //         drinksArray.push(drink);
  //     }
  // }
  console.log(drinksArray);
}

function generateDrinksHTML(drinks) {
  let dynamicHTML = "";

  for (let drink of drinks) {
    dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
        <img src="${drink.strDrinkThumb}" alt="">
        <h2 class="drinkTitle">${drink.strDrink}</h2>
    </div>`;
  }
  dyanmicDrinkElement.innerHTML = dynamicHTML;
}


async function filter() {
  const searchValue = cocktailNameFilterElement.value,
    category = categorySelectElement.value,
    glass = glassSelectName.value,
    ingredient = ingredientSelectName.value;
  let filteredArray = [...drinksArray];
  // console.log(filteredArray);

  if (searchValue) {
    filteredArray = filteredArray.filter((drinkObj) =>
      drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(searchValue);
    console.log(filteredArray);
  }

  if (category !== "Pasirinkite kategoriją") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksOfCategory = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksOfCategory.drinks.some(
        (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
      )
    );
  }

  if (glass !== "Stiklinės tipas") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(
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

  if (ingredient !== "Ingredientas") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(
        " ",
        "_"
      )}`
    );
    const ingredientsOfDrink = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      ingredientsOfDrink.drinks.some(
        (ingredientOgDrink) => drink.idDrink === ingredientOgDrink.idDrink
      )
    );
  }

  //---------------------------------------------------------------------------------------------
  // if (category !== "Pasirinkite kategoriją") {
  //     try {
  //         const promise = await fetch(
  //             `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
  //                 " ",
  //                 "_"
  //             )}`
  //         );
  //         if (promise.ok) {
  //             const drinksOfCategory = await promise.json();
  //             filteredArray = filteredArray.filter((drink) =>
  //                 drinksOfCategory.drinks.some(
  //                     (drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
  //                 )
  //             );
  //         } else {
  //             console.error(`Error fetching category: ${promise.status}`);
  //         }
  //     } catch (error) {
  //         console.error("Error fetching category:", error);
  //     }
  // }

  // // console.log(promise);
  // const drinksOfCategory = await promise.json();
  // // console.log(drinksOfCategory);
  // filteredArray = filteredArray.filter((drink) =>
  // 	drinksOfCategory.drinks.some(
  // 		(drinkOfCategory) => drink.idDrink === drinkOfCategory.idDrink
  // 	)
  // );

  console.log(filteredArray);
  generateDrinksHTML(filteredArray);  
  unsetButtonElement.style.display = 'flex';
  if(filteredArray.length === 0) {
    document.querySelector('.zeroResults').style.display = "flex";
    document.querySelector('.zeroResults').innerHTML = `<p class="noDrinks">Tokių gėrimukų neturime &#128532;</p>`;
  };

  localStorage.setItem('filteredArray', JSON.stringify(filteredArray));
}

async function filterByAlcohol() {
  const alcoholType = document.querySelector('#modalAlcohol').innerText.trim();
  let filteredAlcohol = [...drinksArray];

  const alcoholListResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
  const alcoholListData = await alcoholListResponse.json();
  const availableAlcoholTypes = alcoholListData.drinks.map(drink => drink.strAlcoholic);

  if (availableAlcoholTypes.includes(alcoholType)) {
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholType.replaceAll(" ", "_")}`);
    const drinksOfAlcohol = await promise.json();

    if (drinksOfAlcohol.drinks && drinksOfAlcohol.drinks.length > 0) {
      filteredAlcohol = filteredAlcohol.filter((drink) => {
        return drinksOfAlcohol.drinks.some(
          (drinkOfAlcohol) => drink.idDrink === drinkOfAlcohol.idDrink
        );
      });
    }
  }

  if (filteredAlcohol.length === 0) {
    document.querySelector('.zeroResults').style.display = "flex";
    document.querySelector('.zeroResults').innerHTML = `<p class="noDrinks">Tokių gėrimukų neturime &#128532;</p>`;
  }

  console.log("Išfiltruoti gėrimai: " + filteredAlcohol.length);
  generateDrinksHTML(filteredAlcohol);
  unsetButtonElement.style.display = 'flex';
}

function generateDrinksFromLocalStorage() {
  const storedFilteredArray = localStorage.getItem('filteredArray');

  if(storedFilteredArray) {
    const filteredArray = JSON.parse(storedFilteredArray);

    generateDrinksHTML(filteredArray);
    unsetButtonElement.style.display = 'flex';
    if(filteredArray.length === 0) {
      document.querySelector('.zeroResults').style.display = "flex";
      document.querySelector('.zeroResults').innerHTML = `<p class="noDrinks">Išsifiltruok, jei nori ką nors matyti &#128521;</p>`;
    }
  }
}

window.onload = function () {
  generateDrinksFromLocalStorage();
};

async function initialisation() {
  // Select'ų užpildymas
  await fillSelectElement();
  // console.log(selectValues);
  await getAllDrinks();
  generateDrinksHTML(drinksArray);
  buttoneSearch.addEventListener("click", filter);
  unsetButton.addEventListener('click', resetFilter);
  document.querySelector('#modalAlcohol').addEventListener('click', filterByAlcohol);
  generateDrinksFromLocalStorage();
}

function resetFilter() {
  cocktailNameFilterElement.value = '';
  categorySelectElement.value = 'Pasirinkite kategoriją';
  glassSelectName.value = 'Stiklinės tipas';
  ingredientSelectName.value = 'Ingredientas';
  unsetButtonElement.style.display = 'none';
  document.querySelector('.drinks').style.display = "grid";
  document.querySelector('.zeroResults').style.display = "none";

  generateDrinksHTML(drinksArray);
}

async function openModalByUrl(url) {
  modal.style.display = "flex";

  const promise = await fetch(url);
  const response = await promise.json();
  const drink = response.drinks[0];
  document.querySelector(".modalImg").src = drink.strDrinkThumb;
  document.querySelector(".modalTitle").innerText = drink.strDrink;
  document.querySelector("#modalCategory").innerText = drink.strCategory;
  document.querySelector("#modalAlcohol").innerText = drink.strAlcoholic;
  document.querySelector("#modalGlass").innerText = drink.strGlass;
  document.querySelector("#modalRecipe").innerText = drink.strInstructions;
  // ingredientų listas

  let dynamicHTML = "";
  for (let i = 1; i < 16; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;
    const ingredient = drink[ingredientKey];
    const measure = drink[measureKey];

    if (ingredient !== null && ingredient !== undefined) {
      // document.querySelector('.ingredient').innerText = ingredient;
      // document.querySelector('#measure').innerText = measure;

      dynamicHTML += `<p class="ingredient"><b>${ingredient}:</b> <span>${measure}</span></p>`;
    }
    document.querySelector(".ingredients").innerHTML = dynamicHTML;
  }
}

async function openModal(id) {
  await openModalByUrl(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
}

async function openRandomModal() {
  await openModalByUrl(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
}

function closeModal() {
  modal.style.display = "none";
}

document.querySelector(".modalCloseBtn").onclick = closeModal;
// supriseMeButton.onclick = closeModal;

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

initialisation();

function generateLetters() {
  for (let charCode = 65; charCode <= 90; charCode++) {
      const letter = String.fromCharCode(charCode);
      const letterButton = document.createElement('button');
      letterButton.textContent = letter;
      letterButton.addEventListener('click', () => {
        filterDrinksByLetter(letter);
      });
      lettersSelect.appendChild(letterButton);
  }
}
generateLetters();

async function filterDrinksByLetter (char) {
  const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`);
  const firstLetter = await response.json();
  const letterFilteredDrinks = firstLetter.drinks;
  console.log(letterFilteredDrinks);
  if (letterFilteredDrinks === null) {
    unsetButtonElement.style.display = 'flex';
    document.querySelector('.drinks').style.display = "none";
    document.querySelector('.zeroResults').style.display = "flex";
    document.querySelector('.zeroResults').innerHTML = `<p class="noDrinks">Iš tokios raidės gėrimukų nepagaminome &#128532;</p>`;

  }else {
    generateDrinksHTML(letterFilteredDrinks);
    unsetButtonElement.style.display = 'flex';
  }
}
