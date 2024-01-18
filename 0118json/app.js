//File System

const fileSystem = require('fs');
const data = require('./data.json');
const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: 'secret-banana',
    saveUninitialized: true,
    resave: false,
    cookie: {httpOnly: true},
}))

async function readFile() {
    //Sinchronineė versija failo perskaitymo - vengti!!
    const fileData = fileSystem.readFileSync('./data.json', 'utf-8');
    console.log(JSON.parse(fileData));
}

async function writeFile(obj) {
    //Sinchroninė funkcija - vengti
    // fileSystem.writeFileSync('./data.json', JSON.stringify(obj));

    //Asinchronine irasymo funkcija - naudoti
    await fileSystem.writeFile('./data.json', JSON.stringify(obj), 'utf-8', (err) => {
        console.log(err);
    })
}

readFile();

app.get('/', async(req,res) => {
    console.log('patinka');
    data.countOfVisitors++;
    await writeFile(data);
    req.session.userId = 1;
    res.status(200).json({
        message: `labai gerai ${data.countOfVisitors}-th visitor`,
    });
})

app.get('/whats-my-id', (req, res) => {

    console.log(req.session.userId);
    //req.seesion - yra objektas, skirtas saugoti vartotojo kintamiesiems

    if(req.session.userId) {
        console.log();
    }
    res.send('very good');
})

app.listen(3000, () => {
    console.log("Serveris pasileido, linkas: http://localhost:3000/");
})
//Failo perskaitymas asinchroniniu būdu ↓
// async function readFile() {
//     const fileData = await fileSystem.readFile('./data.json', "utf-8");
    // console.log(JSON.parse(fileData));
// }

