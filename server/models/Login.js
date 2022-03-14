const mongoose = require('mongodb');

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