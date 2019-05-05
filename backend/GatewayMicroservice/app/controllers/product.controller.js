// const ProductService = require('../services/product.service');
const axios = require('axios');
const config = require('../config/config');

module.exports = (app) => {
    app.get("/api/product", async (req, res) => {
        console.log('ALL PRODUCTS')
        console.log('req', req.query.filters)
        try {
            const response = await axios.get(config.ProductMicroservice.productByFilterUrl,
                {
                    params: { filters: req.query.filters }
                })
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });

    app.get('/api/product/:id', async (req, res) => {
        console.log('PRODUCT BY ID')
        try {
            console.log('req.params', req.params)
            const response = await axios.get(config.ProductMicroservice.productByIdUrl,
                {
                    params: { id: req.params }
                })
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });

    app.get(config.ProductMicroservice.productHeartbeat, async (req, res) => {
        console.log('PRODUCT HEARTBEAT BEGINS')
        try {
            const response = await axios.get(config.ProductMicroservice.productHeartbeatUrl)
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });
}

