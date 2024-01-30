const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 50,
    },
    email: {
        type: String,
        require: true,
        minLength: 8,
        maxLength: 80,
    },
    password: {
        type: String,
        require: true
    },
    salt: String,
    birthDate: {
        type: String,
        require: true
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
});

const model = mongoose.model('user', schema);

module.exports = model;
