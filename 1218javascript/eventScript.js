// document.querySelector("p").addEventListener("click", () => {
// 	console.log("uuu dont touch me there");
// });

// document.querySelector("p").onclick = () => {
// 	console.log("uuu dont touch me there");
// };

const names = ["Justinas", "Asta", "Rasa", "Jonas", "Antanas"];
const nameInputElement = document.querySelector("#name");

// document.querySelector('#list').value='';

function showValues(list) {
  let dynamicHTML = "";
  for (const name of list) {
    dynamicHTML += `<li>${name}</li>`;
  }
  document.querySelector("#list").innerHTML = dynamicHTML;
}

showValues(names);

nameInputElement.addEventListener("keyup", (event) => {
  // 1. budas kaip gauti inputo reiksme
  // const inputValue = event.target.value;
  // 2. budas..
  const inputValue = nameInputElement.value;

  const filteredArray = names.filter((value) =>
    value.toLowerCase().includes(inputValue.toLowerCase())
  );

  showValues(filteredArray);

  console.log(filteredArray);
});

// nameInputElement.addEventListener("keydown", (event) => {
// 	console.log("Mygtukas buvo prispaustas");
// });
