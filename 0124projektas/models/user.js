const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 25
    },
    email: {
        type: String,
        require: true,
        minLength: 8,
        maxLength: 80,
    },

});

const model = mongoose.model('user', schema);

module.exports = model;

// {
//     username: 'ggggg'
//     password: 'jklmn'
//     email: 'asd@gmail.com'
// }