const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller')

router.get('/', cartController.get);
router.post('/add', cartController.add);
router.put('/delete', cartController.delete);
router.put('/delete/all', cartController.deleteAll);

module.exports = router;