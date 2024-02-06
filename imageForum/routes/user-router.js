const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const upload = require('../config/multer');

router.post('/register', upload.single("img") ,async(req, res) => {
    console.log(req.body);
    const {username, password, birthDate, email} = req.body;
    const filename = req.file.originalname;


    if(!username || !email || !password || !birthDate) {
        return res.status(400).json({message: 'ne visi duomeny pateikti'})
    }

    const newUser = new UserModel({
        username,
        email,
        password,
        birthDate,
        profilePicture: `http://localhost:3000/public/images/${filename}`,
    });
    await newUser.save();
    console.log(newUser);
    res.status(200).json(newUser);
});

router.get('/users', async(req,res) => {
    const users = await UserModel.find({username: "priest" });

    res.status(200).json({users })
})

module.exports = router;