const mongoose = require('mongoodb');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});

require('./Category');
require('./Pasta');
require('./Drinks');
require('./Login');
require('./orderList');