const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller')

router.get('/', cartController.get);
router.get('/add', cartController.add);
router.delete('/delete', cartController.delete);
router.delete('/delete/all', cartController.deleteAll);

module.exports = router;