// function add() {
// calculate('add');
// }

// function subtract() {
// calculate('subtract');
// }

// function multiply() {
// calculate('multiply');
// }

// function divide() {
// calculate('divide');
// }

// function power() {
// calculate('power');
// }

function calculate(operation) {

    let selector = document.querySelector('#select').value;
    
    const x = parseFloat(document.querySelector('x').value);
    const y = parseFloat(document.querySelector('y').value);


    let result;
    if(selector === 'add') result = x + y;
    else if(selector === 'substract') result = x - y;
    else if(selector === 'multiply') result = x * y;
    else if(selector === 'divide') {
        if(y === 0) {
            console.log('Dalyba iš nuolio negalima')
        }else{result = x / y};
    }
    else if(selector === 'power') result = x ^ y;
    else result = "Skaičiai neįvesti";

    document.querySelector('#result').innerText = `Atsakymas: ${result}`;
}