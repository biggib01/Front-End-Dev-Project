
const {MongoClient} = require('mongodb');
const mongodb = new MongoClient('mongodb+srv://noice:0970@cluster0.0kscu.mongodb.net/itemList?retryWrites=true&w=majority');

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
    await mongodb.connect();
    const list = [];

    try {
        const order = mongodb.db('itemList').collection('orders')
        const data2 = await order.find().forEach(function(obj) {
            list.push(obj);
        });

        //await categories.forEach(console.dir);

        
        res.render('kitchen', {orderss:list})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}
/**
 * GET /
 * Login
 */
 exports.loginpage = async(req, res) => {
    await mongodb.connect();
    const list = [];

    try {
        const order = mongodb.db('itemList').collection('logins')
        const data2 = await order.find().forEach(function(obj) {
            list.push(obj);
        });


        //await categories.forEach(console.dir);

        
        res.render('login', {login:list})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

/**
 * POST /
 * Login
 */
 exports.loginpagePost = async(req, res) => {

    await mongodb.connect();

    const { username, password} = req.body; 

    // if(!username || typeof username != 'string'){
    //     return res.json({ status: 'error', error: 'Invalid username'})
    // }

    // if(!plainTextPassword || typeof plainTextPassword != 'string'){
    //     return res.json({ status: 'error', error: 'Invalid username'})
    // }

    // const password = await bcrypt.hash(plainTextPassword, 10)
    const login = mongodb.db('itemList').collection('logins')
    const data2 = await login.findOne({ username });

    if(data2){
        if( await bcrypt.compare(password, data2.password)){
            const token = jwt.sign({
                 id: data2._id, 
                 username: data2.username
                }, JWT_SECRET)
    
            return res.json({ status: 'ok', data: token})
        }

    }else{
        return res.json({ status: 'error', error: 'Invalid username/password'})
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