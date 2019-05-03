const CartService = require('../services/cart.service');

module.exports = (app) => {
    app.get('/cart', async (req, res) => {
        console.log('DATABASE CONTROLLER GET CART')
        console.log('req.query.email', req.query.email)
        try {

            const cart = await CartService.getCart(req.query.email, res);
            res.status(200).json(cart);
            // res.send({})
        } catch (error) {
            console.log('controller error', error)
            return res.status(500).send(error)
        }
    });

    app.get('/cart/add', async (req, res) => {
        console.log('DATABASE CONTROLLER ADD TO CART')

        // console.log('req.query', req.query)
        // console.log('req.params', req.params)
        // console.log('req.body', req.body)
        let payload = JSON.parse(req.query.payload);
        
        try {
            const cart = await CartService.addItem(payload.email, payload.item, res)
            res.status(201).json(cart);
            // res.send({})
        } catch (error) {
            console.log('controller error', error)
            return res.status(500).send(error)
        }
    })

    app.delete('/api/cart/delete', async (req, res) => {
        try {
            const cart = await CartService.removeItem(req.query._id, req.headers.email)
            res.status(201).json(cart);
        } catch (error) {
            console.log('controller error', error)
            return res.status(500).send(error)
        }
    })
}

