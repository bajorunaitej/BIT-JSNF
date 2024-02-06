// npm init - sukuriamas projektas (jeigu default -y pridėti)
//express - 
// express-session  - sesijų valdymui, prisijungimų valdymui
//npm i mongoose - prisijungimas prie mongoose database
//npm i ejs - ejs palaikymo modulis
//server side rendering - turinio pateikimas - klientui nusiunčiamas 1. html ir css, 2. js, 3. {javascript}, angular, react, next - tampa interaktyvus

const express = require("express");
const app = express();

//DB konfiguracija
require('./config/db-connect').config();

//Express middleware konfiguracija
require('./config/express-middlewares').config(app);

app.listen(3000, () => {
    console.log("serveris paleistas, adresas: http://localhost:3000/");
});