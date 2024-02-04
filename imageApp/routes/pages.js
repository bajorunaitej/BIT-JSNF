const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const PostModel = require("../models/post");

router.get("/", async(req, res) => {
	//index.ejs failo atvaizdavimas iš views aplanko

	const config = {
		title: "Picsome",
		username: "kapust",
		list: ["Product1", "Product2", "Milk", "Choclate"],
		activeTab: "Home",
		loggedIn: !!req.session.user?.loggedIn,
		message: req.query.message,
		posts: await PostModel.find({}),
	};
	res.render("index", config);
	//Kartu paduodami ir parametrai EJS failui
});

router.get("/register", (req, res) => {
	if (!!req.session.user?.loggedIn) {
		return res.redirect("/");
	}
	const config = {
		activeTab: "Register",
		title: "Picsome - Registration",
		loggedIn: !!req.session.user?.loggedIn,
		error: req.query.error,
	};
	res.render("register", config);
	//Register routas skirtas registracijai
});

router.get("/login", (req, res) => {
	if (!!req.session.user?.loggedIn) {
		return res.redirect("/");
	}
	const config = {
		activeTab: "Login",
		title: "Picsome - Authentication",
		loggedIn: !!req.session.user?.loggedIn,
		error: req.query.error,
	};
	res.render("login", config);
	//Login routas skirtas prisijungimui
});

router.get("/my-profile", async (req, res) => {
	// Patikrinimas ar vartotojas yra prisijungęs
	if (!req.session.user?.loggedIn) {
		return res.redirect("/login?error=You must login to your account!");
	}

	const userData = await UserModel.findOne({ _id: req.session.user.id });
	console.log(userData);
	const config = {
		activeTab: "Profile",
		title: "Picsome - My profile",
		profilePhoto: userData.profilePicture,
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

router.get("/new-post", (req,res) => {
	if(!re.session.user?.loggedIn) {
		return res.redirect("/login=error=You must login to your account!")
	}
	const config = {
		title: "Picsome - super duper forum!",
		activeTab: "",
		loggedIn: !!req.session.user?.loggedIn,
	};
	res.render("new-post", config)
	//Kartu paduodami ir parametrai EJS failui
});

module.exports = router;