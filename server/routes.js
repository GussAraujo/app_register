const express = require('express');
const router = express.Router();
const registerController = require('./controller/registerController');
const loginController = require('./controller/loginController');

router.post('/register', registerController.register);
router.post('/login', loginController.login);
 
module.exports = router;