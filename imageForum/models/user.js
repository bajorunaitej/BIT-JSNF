const mongoose = require('mongoose');

//Pagal šį modelį kuriami visi user'iai

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 70,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 120,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 120,
    },
    salt: String,
    birthDate: {
        type: String,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    postsCount: {
        type: Number,
        default: 0,
        required: true,
    },
    commentsCount: {
        type: Number,
        default:0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    admin: {
        default: false,
        type: Boolean,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: new Date(),
        required: true,
    },
    profileLikedUsers: {
        type: Array,
        default: [],
    },
    profileDislikedUsers: {
        type: Array,
        default: [],
    },
});

const model = mongoose.model('user', schema);

module.exports = model;
