const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", function (req,res){
    res.render('index');
})

app.listen(3000, function () {

console.log("server listening on port 3000");
})