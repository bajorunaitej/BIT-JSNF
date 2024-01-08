
// //Modulio importavimas
// const sum = require("./mathModule").sum;
// const atimti = require("./minusModule").subtract;

// console.log(sum(5,6));
// console.log(atimti(5,5));


//Gaunamas HTTP modulis
const http = require("http");

// //Sukuriamas serverio kintamasis
// const server = http.createServer((req, res) => {
//     if(req.url === "/") {
//         request.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
//         res.write('Tai yra mano atsakymas');
//         res.end()
//     }
// });
// //Serveris paleidžiamas ant port'o 3000
// server.listen(3000);
// console.log("Server is started on port 3000");

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

let countOfVisitors = [{}];

app.get('/', (req, res) => {
    req.headers
    res.send("hello world");
});
app.listen(3000);
console.log("serveris pasileido port'u 3000");