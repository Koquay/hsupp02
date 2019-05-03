const CartService = require('../services/cart.service');
const axios = require('axios');
const config = require('../config/config');

module.exports = (app) => {
    app.get('/api/cart', async (req, res) => {
        console.log('GATEWAY GET CART')
        try {
            console.log('req.headers', req.headers)
            const email = req.headers.email;
            console.log('email', email)
            const response = await axios.get(config.CartMicroservice.cartUrl,
                {
                    params: { email: email }
                })
            res.send(response.data);
        } catch (error) {
            console.log('controller error', error)
            return res.status(500).send(error)
        }
    });

    app.patch('/api/cart/add', async (req, res) => {
        console.log('GATEWAY ADD TO CART')
        let email = req.headers.email;
        let item = req.body;
        let payload = { email: email, item:item };

        console.log('email', email)
        try {
            const response = await axios.post(config.CartMicroservice.cartAddUrl, payload)

            res.status(201).json(response.data);
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

