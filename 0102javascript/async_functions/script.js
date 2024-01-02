// const skaicius = 5;

// try {
//     skaicius++;
// } catch (error) {
//     console.log(error);
// }

// console.log("tesiamas darbas..");

//Pažadas
// new Promise((resolve, reject) => {
// })

// fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));


// const pazadas = new Promise((resolve, reject) => {
//     console.log("prasidejo uzklausa i serveri");
//     setTimeout(() =>{
//         resolve("zinute is serverio");
//     }, 1000);
//     console.log("pasibaigė uzklausa i serveri");
// }).then((atsakymas) => console.log(atsakymas));

function callServerSync() {
    console.log("Užklausa į serverį prasidėjo");
    setTimeout(() =>{console.log("gavome atsakymą iš serverio");
    }, 1000);
    console.log("Užklausa baigta");
}
callServerSync();

async function callServerAsync() {
    console.log("Užklausa į serverį prasidėjo");
    await new Promise((resolve, reject) => 
            setTimeout(() =>{
                console.log("gavome atsakymą iš serverio");
                //resolve
            }, 1000)
    );
    console.log("Užklausa baigta");
    return "atsakymas";
};
console.log(callServerAsync());