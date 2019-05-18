const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller')

router.post('/get', cartController.get);
router.patch('/add', cartController.add);
router.delete('/delete/:id', cartController.delete);

module.exports = router;