const word = document.querySelector(".inputText")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", countVowels)

function countVowels() {
    let vowelCount = 0;
    let wordValue = word.value.toLowerCase();

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i];
        console.log(letter);

    if (letter.match(/([a,e,o,u,i])/)) {
        vowelCount++;
    }
}
result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}