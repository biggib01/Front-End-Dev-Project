require('../models/database');
const Category = require('../models/Category')
const Pasta = require('../models/Pasta')
const Drinks = require('../models/Drinks')
const Login = require('../models/Login')
const Order = require('../models/orderList')
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { countDocuments } = require('../models/Category');
const app = express();

app.use(bodyParser.json())


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

        
        res.render('index', {categories:categories, orderss:order})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * POST /
 * Homepage
 */
 exports.home = async(req, res) => {
    const {table ,food} = req.body;
    console.log(table ,food.name)

    const order = await Order.find({ tableID: table, order: food}).lean();

    console.log(order)

    if(typeof order != "undefined" && order != null && order.length != null
    && order.length > 0){
        
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

    try {
        const categories = await Pasta.find({})
        const order = await Order.find({})
        
        res.render('pasta', {categories:categories, orderss:order})
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
        const categories = await Drinks.find({})
        const order = await Order.find({})
        
        res.render('drinks', {title: 'Home page', categories:categories, orderss:order})
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