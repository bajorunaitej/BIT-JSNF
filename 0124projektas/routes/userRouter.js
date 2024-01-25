const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

router.post('/register', async (req,res) => {
    const {username, email} = req.body;

    if(!username || !email) {
        return res.status(400).json({message: 'Ne visi duomenys pateikti'});
    }

    const newUser = new UserModel({
        username, 
        email,
    });
    await newUser.save();

    res.status(200).json(newUser);
})

router.get('/users', async(req,res) => {
    const users = await UserModel.find({username: "asdf"});

    res.status(200).json(users);
})

module.exports = router;