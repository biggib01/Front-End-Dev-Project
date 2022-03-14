const mongoose = require('mongodb');

const orderSchema = new mongoose.Schema({
    tableID: {
        type: String,
        required: 'This fild is required',
    },
    orderList: {
        type: Array,
        required: 'This fild is required',
    },
    
})

module.exports = mongoose.model('Order', orderSchema)