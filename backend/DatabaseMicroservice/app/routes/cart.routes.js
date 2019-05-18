const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller')

router.get('/', cartController.get);
router.get('/add', cartController.add);

module.exports = router;