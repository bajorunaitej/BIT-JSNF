const express = require("express");
const pagesRouter = require('../routes/pages')
const userRouter = require('../routes/userRouter')

function config(app) {
    //Nustatymas EJS aktyvavimui (middleware)
    app.set("view engine", "ejs");

    //Tarpinio route sukūrimas
    const publicRouter = express.Router();

    //Statinių failų atvaizdavimas per /public aplanką
    publicRouter.use(express.static("public"));

    //Middleware - skirtas gauti JSON formato duomenis iš kliento
    app.use(express.json())

    //Tarpinio route panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
    app.use("/public", publicRouter);

    //Puslapių route'ai:
    app.use(pagesRouter);
    app.use('/api/user', userRouter);
    // localhost:300/api/user/userRouter

}

module.exports = {config};