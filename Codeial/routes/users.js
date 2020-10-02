const express = require('express');
const router = express.Router();

const usersController = require('../controller/user_controller');

router.get('/profile',usersController.profile)

console.log('inside user.js file')

module.exports = router;