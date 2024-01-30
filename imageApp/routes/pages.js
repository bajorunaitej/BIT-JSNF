const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    //index.ejs failo atvaizdavimas iš views aplanko
    const config = {
        title: "Picsome",
        username: "bayor",
        list: ['Product1', 'Product2', 'Milk', 'Apple'],
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn,
    };
    res.render("index", config)
    //Kartu paduodami ir parametrai EJS failui
});

router.get('/register', (req,res) => {
    const config = {
        activeTab: "Register",
        title: "Picsome - Registration",
        loggedIn: !!req.session.user?.loggedIn,
    };
    res.render('register');
    //Register route'as skirtas registracijai
});

router.get("/login", (req,res) => {
    const config = {
        activeTab: "Login",
        title: "Picsome - Authentification",
        loggedIn: !!req.session.user?.loggedIn,
    };
    res.render("login", config);
    //Login rpute'as skirtas prisijungimui
});


router.get("/profile", async(req,res) => {
    const config = {
        activeTab: "Profile",
        title: "Picsome - My Profile",
        profilePhoto: "http://localhost:3000/public/images/341.jpg",
        loggedIn: !!req.session.user?.loggedIn,
    };
    res.render("profile", config);
});

module.exports = router;