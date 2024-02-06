const express = require("express");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");

function config(app) {
    //Nustatymas ejs aktyvavimui ↓
    app.set('view engine', 'ejs');
    //Tarpinio route'o sukūrimas
    const publicRouter = express.Router();
    //Statinių failų atvaizdavimas, pasiekiamas per /public aplanką
    publicRouter.use(express.static("public"));
    //middleware - skirtas gauti json formato duomenis iš kliento
    app.use(express.json())

    //Tarpinio route'o panaudojimas, pasiekamas per http://localhost:3000/public/index.js
    app.use('/public', publicRouter);
    //Puslapio rout'ai
    app.use(pagesRouter);
    
    app.use('/api/user', userRouter);
    //localhost:3000/api/user/register
}

module.exports = { config };