const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");
const postRouter = require("../routes/posts-router");
const bodyParser = require("body-parser");


function config(app) {
    //Nustatymas ejs aktyvavimui ↓
    app.set('view engine', 'ejs');
    //Tarpinio route'o sukūrimas
    const publicRouter = express.Router();
    //Statinių failų atvaizdavimas, pasiekiamas per /public aplanką
    publicRouter.use(express.static("public"));
    //middleware - skirtas gauti json formato duomenis iš kliento
    app.use(express.json());

    app.use(bodyParser.urlencoded());
    //in latest body-parser use like below
    // app.use(bodyParser.urlencoded({ extended: true}));

    //Sesijų nustatymai
    app.use(
        session({
            secret: process.env.SESSIONS_SECRET,
            resave: false,
            saveUninitialized: false,

            //Sesijų saugojimas duomenų bazėje
            store: MongoStore.create({
                mongoUrl: require('./db-connect').mongoUrl,
                collectionName: "sessions"
            }),
            cookie: {
                maxAge: 1000*60*60*24*7,
            },
        })
    );

    //Tarpinio route'o panaudojimas, pasiekamas per http://localhost:3000/public/index.js
    app.use('/public', publicRouter);
    app.use('/tinymce', express.static('node_modules/tinymce'));
    //Puslapio rout'ai
    app.use(pagesRouter);
    
    app.use('/api/user', userRouter);
    app.use('/api/post', postRouter);
    //localhost:3000/api/user/register
}

module.exports = { config };