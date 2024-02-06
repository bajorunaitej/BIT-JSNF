const mongoose = require("mongoose");
//Laikinai sukonfiguruoja .env kintamuosius, kad jie būtų matomi mūsų kūrimo aplinkose
require("dotenv").config();

function config() {
    //Process.env - laiko visus aplinkos kintamuosius

    // Prisijungimas prie mongoose database
    mongoose.connect(
        process.env.MONGO_CONNECTION
            .replace("__DB_USER", process.env.DB_USER)
            .replace('__DB_PASSWORD', process.env.DB_PASSWORD)
            .replace('__DB_HOST', process.env.DB_HOST)
            .replace('__DB_NAME', process.env.DB_NAME)
    );
    const db = mongoose.connection;

    // db listeneriai, kurie nusako ar prie db buvo sėkmingai prisijungta ar new
    db.on('error', (error) => { //ERROR listener'is
        console.error('erroras: ' + error);
    });

    db.once('open', () => { //PRISIJUNGIMO listener'is
        console.log('Prie duomenų bazės buvo sėkmingai prisijungta');
    })
}

module.exports = { config };

