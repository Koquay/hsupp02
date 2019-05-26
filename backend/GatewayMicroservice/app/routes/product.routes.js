const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authenticationController =require('../controllers/authenticationController');

router.get('/', authenticationController.authenticate, productController.get);
router.get('/:id', productController.getById);

module.exports = router;