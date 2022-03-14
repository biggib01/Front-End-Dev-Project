
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const app = express();
const {MongoClient} = require('mongodb');
const mongodb = new MongoClient('mongodb+srv://noice:0970@cluster0.0kscu.mongodb.net/itemList?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    await mongodb.connect();
    const list = [];
    const list2 = [];
    
    try {
        const categories = mongodb.db('itemList').collection('categories')
        const data = await categories.find().forEach(function(obj) {
            list.push(obj);
        });
        const order = mongodb.db('itemList').collection('orders')
        const data2 = await order.find().forEach(function(obj) {
            list2.push(obj);
        });

        //await categories.forEach(console.dir);

        res.render('index', {categories:list, orderss:list2})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * POST /
 * Homepage
 */
 exports.home = async(req, res) => {
    const list = [];

    const {table ,food} = req.body;
    console.log(table ,food.name)

    const order = mongodb.db('itemList').collection('orders')
    const data = await order.find({ tableID: table, orderss: food}).forEach(function(obj) {
        list.push(obj);
    });

    console.log(list)

    if(typeof list != "undefined" && list != null && list.length != null
    && list.length > 0){
        
    }

    // try {
        
    //     const order = await Order.find({ tableID })
    //     const categories = await Category.find({ 'name': tableID })
        
        //await categories.forEach(console.dir);

        
    //     res.render('index', {categories:categories, orderss:order})
    // }catch (error){
    //     res.status(500).send({message: error.message || "Error Occured"});
    // }

}
/**
 * GET /
 * Pasta
 */
exports.pasta = async(req, res) => {
    await mongodb.connect();
    const list = [];
    const list2 = [];

    try {
        const categories = mongodb.db('itemList').collection('pastas')
        const data = await categories.find().forEach(function(obj) {
            list.push(obj);
        });
        const order = mongodb.db('itemList').collection('orders')
        const data2 = await order.find().forEach(function(obj) {
            list2.push(obj);
        });
        
        res.render('pasta', {categories:list, orderss:list2})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * GET /
 * Drinks
 */
exports.drinks = async(req, res) => {
    await mongodb.connect();
    const list = [];
    const list2 = [];

    try {
        const categories = mongodb.db('itemList').collection('drinks')
        const data = await categories.find().forEach(function(obj) {
            list.push(obj);
        });
        const order = mongodb.db('itemList').collection('orders')
        const data2 = await order.find().forEach(function(obj) {
            list2.push(obj);
        });
        
        res.render('drinks', {categories:list, orderss:list2})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


async function insertDymmyCategoryData(){

    try{
        await Login.insertMany([
            {
                "username": "admin",
                "password": "admin",
            },
        ]);
    } catch (error){
        console.log('Error: ' + error)
    }
}

//insertDymmyCategoryData();
