const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 40,
    },
    email: {
        type: String,
        require: true,
        minLength: 8,
        maxLength: 80,
    },
    password: {
        type: String,
        required: true
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
        value: 0,
        required: true
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

});

const model = mongoose.model('user', schema);

module.exports = model;

// {
//     username: 'ggggg'
//     password: 'jklmn'
//     email: 'asd@gmail.com'
// }