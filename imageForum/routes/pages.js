//Pages route'as turės visus html'inius route'us

const express = require('express');

const router = express.Router();

//atvaizduojamas pats pagrindinis route'as - index.html ↓
router.get('/', (req,res) => {

    //index.ejs failo atvaizdavimas iš views aplanko
    res.render('index', {
        title: 'Forumo aplikacija',
        username: 'bajor',
    });
    //Kartu paduodami ir parametrai EJS failui
});

//Registracijos route'as
router.get('/register', (req,res) => {
    res.render('register');
    //Register route'as skirtas registracija
});

module.exports = router;