function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiktinisSkaicius = rand(1,20), spejimuSkaicius = 6;
console.log(atsitiktinisSkaicius);
function guessNumber() {
    let inputElement = document.querySelector('#guessInput');
    let resultParagraph = document.querySelector('#rez');
    let guessCountElem = document.querySelector('#spejimuSkaicius');
    if(spejimuSkaicius===0) {
        resultParagraph.innerText = 'Spėjimų skaičius baigėsi, bandyk iš naujo perkrovus psl.';
        return;
    }
    spejimuSkaicius--;
    guessCountElem.innerText = spejimuSkaicius;
    let inputValue = inputElement.value;
    

    if(inputValue > atsitiktinisSkaicius) {
        resultParagraph.innerText = 'Spėjimas buvo neteisingas. Ieškomas skaičius yra mažesnis'
    }
    else if(inputValue < atsitiktinisSkaicius) {
        resultParagraph.innerText = 'Spėjimas buvo neteisingas. Ieškomas skaičius yra didesnis'
    }
    else{
        resultParagraph.innerText = `Teisingas spėjimas. Po ${6-spejimuSkaicius} bandymų`;
    }
    
    
}