const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */

router.get('/', recipeController.homepage);
router.post('/', recipeController.home);
router.get('/pasta', recipeController.pasta);
router.get('/drinks', recipeController.drinks);


module.exports = router;