const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This fild is required',
        unique: true,
    },
    password: {
        type: String,
        required: 'This fild is required',
    },
})

module.exports = mongoose.model('Login', loginSchema)