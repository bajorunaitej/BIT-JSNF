// document.querySelector('p').addEventListener('click', () => {
//     console.log("go away!")
// });

// document.querySelector('p').onclick = () => {
//     console.log("go away!")
// };

const names = [
    'Juste', 'Rasa', 'Antanas', 'Jolanta', 'Domantas'
];
const nameInputElement = document.querySelector("#name");

function showValues(list) {
    let dynamicHTML = "";
    for(const name of list) {
        dynamicHTML.innerHTML += `<li>${name}</li>`;
    }
    document.querySelector('#list').innerHTML = dynamicHTML;
}
showValues(names);


nameInputElement.addEventListener('keyup', (event) =>{

    //1. budas kaip gauti inputo reikšme
    // cont inputValue = event.target.value;
    //2. būdas..
    const inputValue = nameInputElement.value;

    const filteredArray = names.filter((val)=>val.includes(inputValue));
    

});
// nameInputElement.addEventListener('keydown', (event) =>{
//     console.log('mygtukas buvo prispaustas')

// });


