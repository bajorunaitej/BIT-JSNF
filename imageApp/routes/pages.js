const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    //index.ejs failo atvaizdavimas iš views aplanko
    res.render("index", {
        title: "Forumo aplikacija",
        username: "bayor",
        list: ['Product1', 'Product2', 'Milk', 'Apple']
    });
    //Kartu paduodami ir parametrai EJS failui
});

router.get('/register', (req,res) => {
    res.render('register');
    //Register route'as skirtas registracijai
});

module.exports = router;