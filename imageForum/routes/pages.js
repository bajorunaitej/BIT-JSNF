//Pages route'as turės visus html'inius route'us

const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

//atvaizduojamas pats pagrindinis route'as - index.html ↓
router.get('/', (req,res) => {
    //index.ejs failo atvaizdavimas iš views aplanko
	const config = {
        title: 'Foxx forum',
        username: 'bajor',
        activeTab: "Home",
		loggedIn: !!req.session.user?.loggedIn,
		message: req.query.message,

    };
    res.render('index', config);
    //Kartu paduodami ir parametrai EJS failui
});

//Registracijos route'as
router.get('/register', (req,res) => {

    const config = {
		activeTab: "Register",
		title: "Foxx - Registration",
		loggedIn: !!req.session.user?.loggedIn,
		error: req.query.error, 
    }
    res.render('register', config);
    //Register route'as skirtas registracija
});

router.get("/login", (req, res) => {
	if (!!req.session.user?.loggedIn) {
		return res.redirect("/");
	}
	const config = {
		activeTab: "Login",
		title: "Foxx - Authentication",
		loggedIn: !!req.session.user?.loggedIn,
		error: req.query.error,
	};
	res.render("login", config);
	//Login routas skirtas prisijungimui
});

router.get("/my-profile", async (req, res) => {
	// Patikrinimas ar vartotojas yra prisijungęs
	if (!req.session.user?.loggedIn) {
		return res.redirect("/login=You need to login!");
	}

	const userData = await UserModel.findOne({ _id: req.session.user.id });
	console.log(userData);
	const config = {
		activeTab: "Profile",
		title: "Foxx - My profile",
		profilePhoto: userData.profilePicture,
		// profilePhoto: "../public/dev-images/_7482.jpg",
		loggedIn: !!req.session.user?.loggedIn,
		username: userData.username,
		email: userData.email,
		birthDate: userData.birthDate,
		postsCount: userData.postsCount,
		commentsCount: userData.commentsCount,
		likes: userData.likes,
		dislikes: userData.dislikes,
	};
	res.render("profile", config);
});

// router.get("/check-sesion", async (req, res) => {

// });


module.exports = router;