function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
//------------------------------------------

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(5));
//------------------------------------------

function greet(name) {
    console.log(`Koszonom szepen, ${name}`);
}

greet('Aliz');
//------------------------------------------


function factorial(number) {
    if(number === 0 || number === 1) return 1;
    else return number * factorial(number-1);
}

console.log(factorial(5));
//------------------------------------------

function prasuktiCikla(kartai) {
    if(kartai > 0) {
        console.log("Veiksmas nr. " + kartai);
        prasuktiCikla(kartai-1);
    }
}

prasuktiCikla(5);
//------------------------------------------

function celsiusToFarenheit(celsius) {
    return (celsius*9/5)+32
}
console.log(celsiusToFarenheit(2));
//------------------------------------------

function getMaxNumber(arr) {
    return Math.max(...arr)
}

let arr = [1,53,98,55];
console.log(getMaxNumber(arr));
//------------------------------------------

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + min +1)) + min;
}

console.log(getRandomNumber(0,10));

//------------------------------------------
function getUnique(arr) {
    return [...new Set(arr)]
    
}
console.log(getUnique([1,1,5,3,3,65]));



const array = [1,2,3,4,5]

//------------------------------------------
function squareValues(arr) {
    return arr.map(number => number*number)
}

const news = squareValues(array);
console.log(squareValues(array));
//------------------------------------------

const asas = squareValues(news);
console.log(asas);
console.log(news);
//------------------------------------------

function smaller(arr, start, end) {
    return arr.slice(start, end);
}
const sliced = smaller([2,6,5,4,5,55,3,2,1], 2, 5);

console.log(sliced);
//------------------------------------------

function double(num) {
    return num*2
}
//------------------------------------------
function reversas(text) {
    return text.split("").reverse().join("")
}

//------------------------------------------

function suma(arr) {
    let sum = 0
    // for(let i in arr)
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
}
console.log(suma([1,2,3]));