const mongoose = require('mongoose');

//Laikinai sukonfiguruoja .env kintamuosius, kad jie būtų matomi mūsų kūrimo aplikose
require("dotenv").config();

const mongoUrl = process.env.MONGO_CONNECTION.replace('__DB_USER', process.env.DB_USER)
.replace('__DB_PASSWORD', process.env.DB_PASSWORD)
.replace('__DB_HOST', process.env.DB_HOST)
.replace('__DB_NAME', process.env.DB_NAME);

function config() {
    //process.env - laiko visus aplikos kintamuosius
    // console.log(process.env.MONGO_CONNECTION.replace('__DB_USER', process.env.DB_USER).replace('__DB_PASSWORD', process.env.DB_PASSWORD).replace('__DB_HOST', process.env.DB_HOST).replace('__DB_NAME', process.env.DB_NAME));

    //Prisijungimas prie duomenų bazės pasinaudojant URL
    mongoose.connect(
        process.env.MONGO_CONNECTION.replace('__DB_USER', process.env.DB_USER)
            .replace('__DB_PASSWORD', process.env.DB_PASSWORD)
            .replace('__DB_HOST', process.env.DB_HOST)
            .replace('__DB_NAME', process.env.DB_NAME));
    const db = mongoose.connection;

    //DB listeneriai, kurie nusako, ar prie DB buvo prisijungta sėkmingai ar ne
    db.on('error', (error) => {//ERROR listeneris
        console.error('erroras: ' + error);
    });

    db.once('open', () => {//PRISOJUNGIMO listeneris
        console.info('Prie duomenų bazės buvo sėkmingai prisijungta');
    });
}

//su objektu eksportuoja daugiau funkcijų
module.exports = {config, mongoUrl};
// module.exports = config;