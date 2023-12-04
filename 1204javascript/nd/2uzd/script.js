function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//  let a = rand(-10,10);
//  let b = rand(-10,10);
//  let c = rand(-10,10);

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
    let number = rand(-10,10);
    let numberColor = color(number);

    let element = document.createElement('h1');
    element.innerText = number;
    element.classList.add(numberColor);

    document.body.appendChild(element);
}
