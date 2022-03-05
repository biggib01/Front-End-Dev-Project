const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */

router.get('/', recipeController.homepage);
router.get('/pasta', recipeController.pasta);
router.get('/drinks', recipeController.drinks);
router.get('/login', recipeController.loginpage);
router.post('/login', recipeController.loginpagePost);
router.get('/kitchen', recipeController.kitchenPage);


module.exports = router;