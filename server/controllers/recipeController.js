require('../models/database');
const Category = require('../models/Category')


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {

    try {
        const limitNumber = 3;
        const categories = await Category.find({}).limit(limitNumber)
        
        res.render('index', {title: 'Home page', categories})
    }catch (error){
        res.status(500).send({message: error.message || "Error Occured"});
    }



    res.render('index');
}



// async function insertDymmyCategoryData(){

//     try{
//         await Category.insertMany();
//     } catch (error){
//         console.log('Error: ' + error)
//     }
// }

// insertDymmyCategoryData();