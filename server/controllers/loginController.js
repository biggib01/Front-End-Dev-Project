require('../models/database');
const Category = require('../models/Category')
const Pasta = require('../models/Pasta')
const Drinks = require('../models/Drinks')
const Login = require('../models/Login')
const Order = require('../models/orderList')
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const app = express();

const JWT_SECRET = "Smkdl2w*(@jnlN1902jlknmslAED@*(!)YE@!Njklnhuin2idbni(WHD@HNjkoln"

app.use(bodyParser.json())

/**
 * GET /
 * Kitchen
 */
 exports.kitchenPage = async(req, res) => {

    try {
        
        const order = await Order.find({})

        //await categories.forEach(console.dir);

        
        res.render('kitchen', {orderss:order})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}
/**
 * GET /
 * Login
 */
 exports.loginpage = async(req, res) => {

    try {
        
        const login = await Login.find({})

        //await categories.forEach(console.dir);

        
        res.render('login', {login:login})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * POST /
 * Login
 */
 exports.loginpagePost = async(req, res) => {
    const { username, password} = req.body; 

    // if(!username || typeof username != 'string'){
    //     return res.json({ status: 'error', error: 'Invalid username'})
    // }

    // if(!plainTextPassword || typeof plainTextPassword != 'string'){
    //     return res.json({ status: 'error', error: 'Invalid username'})
    // }

    // const password = await bcrypt.hash(plainTextPassword, 10)

    const user = await Login.findOne({ username }).lean()

    if(!user){
        return res.json({ status: 'error', error: 'Invalid username/password'})
    }

    if( await bcrypt.compare(password, user.password)){
        const token = jwt.sign({
             id: user._id, 
             username: user.username
            }, JWT_SECRET)

        return res.json({ status: 'ok', data: token})
        
    }

    // try{
    //     const response = await Login.create({
    //         username,
    //         password
    //     })
    //     console.log(response)
    // }catch(error){
    //     console.log(error)
    //     return res.json({ status: 'error' , error: 'No username or worng password'})
    // }   

    res.json({ status: 'error', error: 'Invalid username/password' })
}