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
    console.log(newUser);
    res.status(200).json({message: 'labas'});
})

router.get('/users', async(req,res) => {
    // const users = await UserModel.find({}); - visi user'iai
    const users = await UserModel.find({username: "anOwl"});

    res.status(200).json(users);
})

module.exports = router;