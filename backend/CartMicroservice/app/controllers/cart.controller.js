const config = require('../config/config');
const axios = require('axios');

module.exports = (app) => {
    console.log('CART MICROSERVICE CONTROLLER');

    app.get('/cart', async (req, res) => {
        console.log('CARTMICROSERVICE GET CART')
        console.log('req.query.email', req.query.email);
        
        try {
            const response = await axios.get(config.DatabaseMicroservice.cartUrl,
                {
                    params: { email: req.query.email }
                })
            res.send(response.data);
            // console.log('response.data', response.data)

            // res.send({})
        } catch (error) {
            throw error;
        }
    });

    app.post('/cart/add', async (req, res) => {
        console.log('CARTMICROSERVICE ADD TO CART')
        // console.log('req.body', req.body);
        let payload = req.body;
        console.log('req.query', req.query)
        console.log('req.params', req.params)
        console.log('req.body', req.body)

        try {
            const response = await axios.get(config.DatabaseMicroservice.cartAddUrl,                 
                {
                    params: { payload: req.body }
                })
            res.send(response.data);
            console.log('response.data', response.data)

            // res.send({})
        } catch (error) {
            throw error;
        }
    });
}