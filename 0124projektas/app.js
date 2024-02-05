const express = require("express");
const app = express();

//DB konfiguracija
require("./config/dbConnect").config();
// Express middleware konfiguracija
require("./config/expressMiddlewares").config(app);
// Failu ivesties konfiguracija

app.listen(3000, () => {
	console.log("Serveris paleistas, jo adresas: http://localhost:3000/");
});