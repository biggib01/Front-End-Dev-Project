const mongoose = require('mongoose');

const pastaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This fild is required',
    },
    image: {
        type: String,
        required: 'This fild is required',
    },
    price: {
        type: Number,
        required: 'This fild is required',
    },
})

module.exports = mongoose.model('Pasta', pastaSchema)