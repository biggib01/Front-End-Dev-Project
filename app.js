const express = require('express');
const bodyParser = require("body-parser");
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layout/main.ejs');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('login')
// })

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen( port , ["192.168.1.109", "localhost" ],() => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
