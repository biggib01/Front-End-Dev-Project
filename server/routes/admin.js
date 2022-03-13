const express = require('express')
const router = express.Router();
const loginController = require('../controllers/loginController');

/**
 * App Routes
 */

router.get('/login', loginController.loginpage);
router.post('/login', loginController.loginpagePost);
router.get('/kitchen', loginController.kitchenPage);

module.exports = router;