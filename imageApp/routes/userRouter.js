const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const upload = require('../config/multer').upload;
const security = require('../utils/security');

router.post('/register', upload.single('img'), async (req,res) => {
    const {username, password, birthDate, email} =  req.body;
    const fileName = require('../config/multer').lastFileName;

    if(!username || !email || !password || !birthDate) {
        return res.status(400).json({message: 'Ne visi duomenys pateikti'});
    }

    const salt = security.generateSalt();
    const hashedPassword = security.hashPassword(password, salt);

    const newUser = new UserModel({
        username, 
        email,
        salt,
        passwod: hashedPassword,
        birthDate,
        profilePicture: `http://localhost:3000/public/images/${fileName}`,
    });
    await newUser.save();
    //Nustatoma sesija vartotojui - po regostracijos iškart įvykodmas prijungimas prie sistemos
    req.session.user = {
        id: newUser._id,
        loggedIn: true,
    };
    res.status(200).json({message: 'Vartotojas sukurtas , prijungtas prie sistemos'});
})

router.get('/users', async(req,res) => {
    if(!req.session.user.admin) {
        return res.status(403).json({message: "įsigyk teises"});
    }
    console.log(req.session.user);
    // const users = await UserModel.find({}); - visi user'iai
    // const users = await UserModel.find({"something-someone"});

    res.status(200).json(users);
});

router.post("/login", async(req,res) => {
    const {loginName, passwod} = req.body;
    
    const existingUser = loginName.includes("@")
        ? await UserModel.findOne({email: loginName})
        : await UserModel.findOne({username: loginName});
    if(!existingUser) return req.redirect("/login");

    if(
        !security.isValidCredentials(
            passwod,
            existingUser.salt,
            existingUser.password
        )
    ) {
        return res.redirect("/login");
    }
    req.session.user = {
        id: existingUser._id,
        loggedIn: true,
        admin: existingUser.admin,
    };
    res.redirect("/");
});

router.get("/logout", async(req,req) => {
    if(!req.session.user.loggedIn) {
        res.redirect("/");
    } else {
        req.session.destroy((err) => {
            if(err) {
                return res.redirect("/");
            } else {
                res.clearCookie("connect.sid");
                return res.redirect("/login");
            }
        });
    }
});

module.exports = router;