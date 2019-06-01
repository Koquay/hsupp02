const CartService = require('../services/cart.service');

exports.get = (async (req, res) => {
    console.log('DATABASE CONTROLLER GET CART')
    console.log('req.query.email', req.query.email)
    try {

        const cart = await CartService.getCart(req.query.email, res);
        res.status(200).json({cart});
        return;

    } catch (error) {
        let cart = {};
        cart.errorMessage = error.message;
        cart.errorStatus = error.status;
        console.log('****** DatabaseMicroservice cart.controller GET **********', cart)
        res.status(error.status).json({ cart });
        return;
    }
});

exports.add = (async (req, res) => {
    console.log('DATABASE CONTROLLER ADD TO CART')

    let payload = JSON.parse(req.query.payload);

    try {
        const cart = await CartService.addItem(payload.email, payload.item, res)
        res.status(201).json(cart);
       
    } catch (error) {
        let cart = {};
        cart.errorMessage = error.message;
        cart.errorStatus = error.status;
        console.log('****** DatabaseMicroservice cart.controller add **********', cart)
        res.status(error.status).json(cart );
        return;
    }
})

exports.delete = (async (req, res) => {
    try {
        console.log('DATABASE delete req.query', req.query);

        let payload = JSON.parse(req.query.payload);

        const cart = await CartService.removeItem(payload.id, payload.email)
        console.log('DATABASE cart delete', cart);
        res.send(cart);
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

exports.deleteAll = (async (req, res) => {
    try {
        console.log('DATABASE delete All req.query', req.query);

        let payload = JSON.parse(req.query.payload);

        const cart = await CartService.removeAllItems(payload.email)
        console.log('DATABASE cart delete all ', cart);
        res.send({});
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})



