function calculate() {
    let x = parseFloat(document.querySelector('#x').value);
    let y = parseFloat(document.querySelector('#y').value);
    let rez = document.querySelector('#rez');

    let operation = document.querySelector('#operation').value

    if (isNaN(x) || isNaN(y)) {
        rez.innerText = "Reikia įvesti skaičius";
        console.log();
        return;
    }

    if( operation === '+' ) rez.innerText = x + y;
    else if(operation === '-') rez.innerText = x - y;
    else if(operation === '*') rez.innerText = x * y;
    else if(operation === '/' && y !== 0 ) {
        rez.innerText = x / y;
    }
    else if(operation === '**') {
        if (x===0 && y <= 0) {
            rez.innerText = 'Nulio kėlimas laipsniu nulis arba neigiamu laipsniu negalimas'
        }else {
            rez.innerText = x ** y;
        }
    }
    

}