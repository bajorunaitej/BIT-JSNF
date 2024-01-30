const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pagesRouter = require('../routes/pages');
const userRouter = require('../routes/userRouter');
const bodyParser = require("body-parser");

function config(app) {
    //Nustatymas EJS aktyvavimui (middleware)
    app.set("view engine", "ejs");

    //Tarpinio route sukūrimas
    const publicRouter = express.Router();

    //Statinių failų atvaizdavimas per /public aplanką
    publicRouter.use(express.static("public"));

    //Middleware - skirtas gauti JSON formato duomenis iš kliento
    app.use(express.json())
    app.use(bodyParser.urlencoded());
    //Sesijų nustatymai
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            //Sesijų saugojimui duomenų bazėje
            store: MongoStore.create({
                mongoUrl: require("./dbConnect").mongoUrl, //mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
                collectionName: "sessions",
            }),
            cookie: {
                maxAge: 1000*60*60*24*7,
            },
        })
    );

    //Tarpinio route panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
    app.use("/public", publicRouter);

    //Puslapių route'ai:
    app.use(pagesRouter);
    
    app.use('/api/user', userRouter);
    // localhost:3000/api/user/userRouter

}

module.exports = {config};