const express = require('express');
const bodyParser = require("body-parser");
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

require('dotenv').config();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layout/main.ejs');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('login')
// })
const adminRoutes = require('./server/routes/admin');
app.use('/4y0h9WnLw/TjWXpwK9EZ4D7WCZaB9s/2U/sPcnup1do=', adminRoutes)

const userRoutes = require('./server/routes/recipeRoutes.js')
app.use('/', userRoutes);

// app.listen( port , ["192.168.1.102", "localhost" ],() => {
//     console.log(`Listening to requests on http://localhost:${port}`);
// });

app.listen( port , host,() => {
    console.log(`Listening to requests on ${host}:${port}`);
});