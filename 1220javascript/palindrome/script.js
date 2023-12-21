const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome)

function palindrome() {
    let inputValue = input.value;
    let len = inputValue.length;
    let start = inputValue.substring(0, Math.floor(len/2)).toLowerCase();

    let end = inputValue.substring(len-Math.floor(len/2));
    let flip = end.split("").reverse().join("");
    // let flip2 = [...end].reverse().join("")

    if(!/^[A-Za-z]+$/.test(inputValue)) alert("Įvedėte ne raides")
    else if(start === flip) result.innerHTML = `${inputValue.toUpperCase()} is a palindrom `
    else result.innerHTML = `${inputValue.toUpperCase()} is not a palindrom `
}