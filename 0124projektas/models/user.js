const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 80,
        //Unique - nurodo, kad db būtų unikalus įrašas
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    salt: String,
    birthDate: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    postsCount: {
        type: Number,
        default: 0,
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    },
    registrationData: {
        type: Date,
        default: new Date(),
        required: true,
    }
});

const model = mongoose.model('user', schema);

module.exports = model;
