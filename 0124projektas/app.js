const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Prisijungimas prie duomenų bazės pasinaudojant URL
mongoose.connect(`mongodb+srv://eatinganapple:Ts4LXm2YaUbOdIc2@forum.7aypvyk.mongodb.net/forumhub`);
const db = mongoose.connection;

//DB listeneriai, kurie nusako, ar prie DB buvo prisijungta sėkmingai ar ne
db.on('error', (error) => {//ERROR listeneris
    console.error('erroras: ' + error);
});

db.once('open', () => {//PRISOJUNGIMO listeneris
    console.info('Prie duomenų bazės buvo sėkmingai prisijungta');
});

//Nustatymas EJS aktyvavimui
app.set("view engine", "ejs");

//Tarpinio route sukūrimas
const publicRouter = express.Router();
//Statinių failų atvaizdavimas per /public aplanką
publicRouter.use(express.static("public"));
//Tarpinio route panaudojimas, pasiekiamas per http://localhost/public endpoint'ą
app.use("/public", publicRouter)

app.get('/', (req,res) => {
    //index.ejs failo atvaizdavimas iš views aplanko
    res.render("index", {
        title: "Forumo aplikacija",
        username: "bayor",
        list: ['Product1', 'Product2', 'Milk', 'Apple']
    });
    //Kartu paduodami ir parametrai EJS failui
});

app.get('/register', (req,res) => {
    res.render('register');
    //Register route'as skirtas registracijai
});
//Listen on port 3000
app.listen(3000, () => {
    console.log("Serveris paleistas. Jo adresas http://localhost:3000/");
});