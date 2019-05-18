const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/signin', userController.signin);

module.exports = router;