function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let sk = rand(1,6);
console.log(sk);

if(sk===1) {
    let h1 = document.querySelector('#h1').value;
    h1.innerText = sk;
}
else if(sk===2) {
    let h2 = document.querySelector('#h2').value;
    h1.innerText = sk;
}
else if(sk===3) {
    let h3 = document.querySelector('#h3').value;
    h1.innerText = sk;
}
else if(sk===4) {
    let h4 = document.querySelector('#h4').value;
    h1.innerText = sk;
}
else if(sk===5) {
    let h5 = document.querySelector('#h5').value;
    h1.innerText = sk;
}
else if(sk===6) {
    let h6 = document.querySelector('#h6').value;
    h1.innerText = sk;
}