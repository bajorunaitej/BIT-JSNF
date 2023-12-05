function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function color(number) {
  if (number < 0) {
    return "green";
  } else if (number === 0) {
    return "red";
  } else {
    return "blue";
  }
}

for (let i = 1; i<=3; i++) {
  let number = rand(-10,25);
  let numberColor = color(number);

  let element = document.createElement('h1');
  element.innerText = number;
  element.classList.add(numberColor);

  document.body.appendChild(element);
}


// let number = '';

// for(i = 0; i < 3; i++) {
//   number = rand(-10,25);
//   if(number < 0) document.write(`<h3 style = "color: green;">${number}</h3>`);
//   if(number === 0) document.write(`<h3 style = "color: red;">${number}</h3>`);
//   if(number > 0) document.write(`<h3 style = "color: blue;">${number}</h3>`);
// }