const express = require('express');
const app = express();

//DB konfiguracija
require('./config/dbConnect').config();
//Express middleware konfiguracija
require('./config/expressMiddlewares').config(app);


//Listen on port 3000
app.listen(3000, () => {
    console.log("Serveris paleistas. Jo adresas http://localhost:3000/");
});