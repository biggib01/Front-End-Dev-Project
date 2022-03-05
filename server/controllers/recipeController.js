require('../models/database');
const Category = require('../models/Category')
const Pasta = require('../models/Pasta')
const Drinks = require('../models/Drinks')
const Order = require('../models/orderList')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {

    try {
        

        const limitNumber = 8;
        const order = await Order.find({})
        const categories = await Category.find({}).limit(limitNumber)

        //await categories.forEach(console.dir);

        
        res.render("index", {categories:categories, orderss:order})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * GET /
 * Pasta
 */
exports.pasta = async(req, res) => {

    try {
        const limitNumber = 8;
        const categories = await Pasta.find({}).limit(limitNumber)
        const order = await Order.find({}).limit(limitNumber)
        
        res.render("pasta", {categories:categories, orderss:order})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * GET /
 * Drinks
 */
exports.drinks = async(req, res) => {

    try {
        const limitNumber = 8;
        const categories = await Drinks.find({}).limit(limitNumber)
        const order = await Order.find({}).limit(limitNumber)
        
        res.render('drinks', {title: 'Home page', categories:categories, orderss:order})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

async function insertDymmyCategoryData(){

    try{
        await Order.insertMany([
            {
                "TableID": "A1",
                "orderList": [{
                    "Pizza": "Veggie - Medium: 1x",
                    "Pasta": "",
                    "Drinks": "PEPSI 1.49L: 1x",
                    "Price": "300 Baht",
                }],
            },
            {
                "TableID": "C2",
                "orderList": [{
                    "Pizza": "Seafood Paradise - Medium: 2x",
                    "Pasta": "",
                    "Drinks": "PEPSI 1.49L: 1x",
                    "Price": "300 Baht",
                }],
            }
        ]);
    } catch (error){
        console.log('Error: ' + error)
    }
}

//insertDymmyCategoryData();