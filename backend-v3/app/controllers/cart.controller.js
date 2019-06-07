const CartService = require('../services/cart.service');

exports.get = (async (req, res) => {
    console.log('DATABASE CONTROLLER GET CART')
    console.log('req.query.email', req.query.email)
    try {

        const cart = await CartService.getCart(req.query.email, res);
        
        if(cart.error) {
            return errorHandler.handleError('SIGN IN', res, cart.error);
        } else {
            return  res.status(200).json({ cart });
        }               

    } catch (error) {
        console.log('****** cart.controller GET **********', cart)
        return errorHandler.handleError('GET CART', res, error);
    }
});

exports.add = (async (req, res) => {
    console.log('DATABASE CONTROLLER ADD TO CART')

    let email = JSON.parse(req.headers.user).email;
    let item = req.body;

    try {
        const cart = await CartService.addItem(email, item, res)
        res.status(201).json(cart);

    } catch (error) {
        let cart = {};
        cart.errorMessage = error.message;
        cart.errorStatus = error.status;
        console.log('****** DatabaseMicroservice cart.controller add **********', cart)
        res.status(error.status).json(cart);
        return;
    }
})

exports.delete = (async (req, res) => {
    try {
        const email = JSON.parse(req.headers.user).email;
        const id = req.params.id;

        const cart = await CartService.removeItem(id, email)
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



