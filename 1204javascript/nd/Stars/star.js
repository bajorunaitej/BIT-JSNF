let starsContainer = document.getElementById('stars');
let starsString = document.querySelector('#stars').value;
let starsPerLine = 50;

let result = '';
for(let i = 0; i < starsString.length; i += starsPerLine) {
    result += `${starsString.slice(i, i + starsPerLine)}\n`;
}
starsContainer.textContent = result;

