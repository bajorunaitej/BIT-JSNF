const cocktailNameFilterElement = document.querySelector('#cocktailName');
const supriseMeButton = document.querySelector('#supriseMe');


fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
.then((response) => response.json())
.then((response) => console.log(response));

supriseMeButton.addEventListener('click', () => {
    
})