const height = document.querySelector(".height"),
  weight = document.querySelector(".weight"),
  calculate = document.querySelector(".btn"),
  result = document.querySelector(".results"),
  reset = document.querySelector(".reset");

calculate.addEventListener("click", calBMI);

function calBMI(e) {
  e.preventDefault();
  
  let heightValue = height.value;
  let weightValue = weight.value;

  if (!heightValue || isNaN(heightValue)) {
    return (result.innerHTML = "Provide a valid height");
  } else if (!weightValue || isNaN(weightValue)) {
    return (result.innerHTML = "Provide a valid weight");
  } else {
    let heightInMeters = heightValue / 100;
    let bmi = (weightValue / Math.pow(heightInMeters, 2)).toFixed(2);

    if (bmi < 18.5) {
      showResults(`Underweight: <span>${bmi}</span>`, "orange");
    }
    if (bmi < 18.5 && bmi < 25) {
      showResults(`Normal: <span>${bmi}</span>`, "green");
    }
    if (bmi > 25 && bmi < 30) {
      showResults(`Overweight: <span>${bmi}</span>`, "blue");
    }
    if (bmi > 30) {
      showResults(`Obese: <span>${bmi}</span>`, "red");
    }
  }
  
}

function showResults(value, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = value);
}

reset.addEventListener('click', resetInputValuesToNone);

function resetInputValuesToNone() {
  // let heightValueInput = height.value;
  // let weightValueInput = weight.value;

  // heightValueInput.textContent = '';
  // weightValueInput.textContent = '';
  height.value = '';
  weight.value = '';
  result.textContent = '';
  reset.style.display = 'none';
}
