// let starsContainer = document.getElementById('stars');
// let starsString = document.querySelector('#stars').value;
// let starsPerLine = 50;

// let result = '';
// for(let i = 0; i < starsString.length; i += starsPerLine) {
//     result += `${starsString.slice(i, i + starsPerLine)}\n`;
// }
// starsContainer.textContent = result;

let starsContainer = document.querySelector('#starsContainer');
let stars = '';

for(let i = 0; i < 400; i++) {
    stars += '*';
    if((i + 1) % 50 === 0) {
        stars += `<br>`;
    }
}
starsContainer.innerHTML = stars;

// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********

