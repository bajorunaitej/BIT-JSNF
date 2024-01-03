const allUrls1 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls2 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
],
allUrls3 = [
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Triple_sec",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Applejack",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Brandy",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Lemon_vodka",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Champagne",
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sherry",
];

// function fetchData() {
//     const startTime = new Date();
//     fetch(allUrls2[0])
//     //DET, POST, UPDATE(atnaujinti viską), PATCH(pakeisti tam tikrus laukus), DELETE
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(response)
//         const endTime = new Date();
//         const duration = endTime.getTime() - startTime.getTime();
//         console.log(duration + "ms");
//     });
// }

// async function fetchDataAsync() {
//     const startTime = new Date();
//     const request = await fetch(allUrls2[1]);
//     const drinks = await request.json();
//     const endTime = new Date();
//     const duration = endTime.getTime() - startTime.getTime();
//     console.log("async" + duration + "ms");
// }

// // fetchData();

// // fetchDataAsync();

// async function fetchAllDataByIngredient(urls) {

//     for(const url of urls) {
//         const promise = await fetch(url);
//         const answer = await promise.json();
//         console.log(answer);
//     }
// }

async function fetchAllDataIngredient(urls) {
    const startTime = new Date();

    const promises = urls.map((url) => 
        fetch(url).then((response) => response.json())
        );
    const dataFromAllSources = await Promise.all(promises);
    console.log(dataFromAllSources);
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    console.log("async" + duration + "ms");
}
// fetchAllDataIngredient(allUrls2);

const array1 = [1,2,3,4];
const array2 = [...array1];

console.log(array2);
array1.push(5);
console.log(array1);
console.log(array2);

//Masyvo destrukturavimas
const [,antras,,ketvirtas] = array1;
console.log(antras, ketvirtas);

//Objekto destrukturavimas
const obj = {
    id: 4,
    name: "John",
    surname: "Doe",
    age: 27,
    married: false,
};

const {name, surname, married} = obj;
console.log(name, surname, married);

//MAP - grąžina pakeistas visa masyvo reikšmės
const array = [1,2,3,4,5];

const mappedArray = array.map((value) => value*2);
console.log(mappedArray);

//Filter:
const filteredArray = array.filter((value) => value > 3);
console.log(filteredArray);

//Some: 
const isThereAWantedValue = array.some((value) => value === 7);
console.log(isThereAWantedValue);