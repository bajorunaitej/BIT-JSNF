function result(){
  // let rez = document.querySelector('#rez').value;
  let score=0;
  if(document.querySelector('#correct1').checked) score++;

  if(document.querySelector('#correct2').checked) score++;

  if(document.querySelector('#correct3').checked) score++;

  if(document.querySelector('#correct4').checked) score++;
  
  if(document.querySelector('#correct5').checked) score++;

  document.write(`You scored ${score} out of 5`)
  // rez.innerText = `You scored ${score} out of 5`;
}