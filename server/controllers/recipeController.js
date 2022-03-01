require('../models/database');
const Category = require('../models/Category')
const Pasta = require('../models/Pasta')
const Drinks = require('../models/Drinks')


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {

    try {
        const limitNumber = 8;
        const categories = await Category.find({}).limit(limitNumber)
        
        res.render('index', {title: 'Home page', categories:categories})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }



    res.render('index');
}

/**
 * GET /
 * Pasta
 */
exports.pasta = async(req, res) => {

    try {
        const limitNumber = 8;
        const categories = await Pasta.find({}).limit(limitNumber)
        
        res.render('pasta', {title: 'Home page', categories:categories})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }



    res.render('pasta');
}

/**
 * GET /
 * Drinks
 */
exports.drinks = async(req, res) => {

    try {
        const limitNumber = 8;
        const categories = await Drinks.find({}).limit(limitNumber)
        
        res.render('drinks', {title: 'Home page', categories:categories})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }



    res.render('drinks');
}

async function insertDymmyCategoryData(){

    try{
        await Drinks.insertMany([
            {
                "name": "PEPSI 1.49L",
                "image": "https://fs.hut1150.com/drinks-desserts/pepsi-1490ml_pep149-07042021102210.jpg",
                "price": "40"
            },
            {
                "name": "PEPSI MAX 1.45L",
                "image": "https://fs.hut1150.com/drinks-desserts/pepsi-max-1450ml-18112020114251.jpg",
                "price": "40"
            },
            {
                "name": "PEPSI 345 ML",
                "image": "https://fs.hut1150.com/drinks-desserts/pepsi-345ml-18112020114510.jpg",
                "price": "20"
            },
            {
                "name": "PEPSI 550 ML",
                "image": "https://fs.hut1150.com/drinks-desserts/pepsi-550ml-18112020114410.jpg",
                "price": "25"
            },
        ]);
    } catch (error){
        console.log('Error: ' + error)
    }
}

//insertDymmyCategoryData();