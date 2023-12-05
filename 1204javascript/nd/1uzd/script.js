function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let sk = rand(1,6);
console.log(sk);

let randomNumberH = document.getElementById('randomNumberH');
randomNumberH.innerHTML = `<h${sk}>${sk}</h${sk}>`;