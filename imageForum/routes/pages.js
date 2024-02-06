//Pages route'as turės visus html'inius route'us

const express = require('express');

const router = express.Router();

//atvaizduojamas pats pagrindinis route'as - index.html ↓
router.get('/', (req,res) => {

    //index.ejs failo atvaizdavimas iš views aplanko
    res.render('index', {
        title: 'Foxx forum',
        username: 'bajor',
        activeTab: "Home",
    });
    //Kartu paduodami ir parametrai EJS failui
});

//Registracijos route'as
router.get('/register', (req,res) => {

    const config = {
		activeTab: "Register",
		title: "Foxx - Registration",
    }
    res.render('register', config);
    //Register route'as skirtas registracija
});

router.get("/login", (req, res) => {
	// if (!!req.session.user?.loggedIn) {
	// 	return res.redirect("/");
	// }
	const config = {
		activeTab: "Login",
		title: "Foxx - Authentication",
		// loggedIn: !!req.session.user?.loggedIn,
		// error: req.query.error,
	};
	res.render("login", config);
	//Login routas skirtas prisijungimui
});

router.get("/my-profile", async (req, res) => {
	// Patikrinimas ar vartotojas yra prisijungęs
	// if (!req.session.user?.loggedIn) {
	// 	return res.redirect("/login?error=Jums reikia prisijungti prie paskyros");
	// }

	// const userData = await UserModel.findOne({ _id: req.session.user.id });
	// console.log(userData);
	const config = {
		activeTab: "Profile",
		title: "Foxx - My profile",
		// profilePhoto: userData.profilePicture,
		// loggedIn: !!req.session.user?.loggedIn,
		// username: userData.username,
		// email: userData.email,
		// birthDate: userData.birthDate,
		// postsCount: userData.postsCount,
		// commentsCount: userData.commentsCount,
		// likes: userData.likes,
		// dislikes: userData.dislikes,
	};
	res.render("profile", config);
});

module.exports = router;