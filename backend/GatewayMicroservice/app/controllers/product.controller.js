// const ProductService = require('../services/product.service');
const axios = require('axios');
const config = require('../config/config');
const errorHandler = require('../util/error.handler');

exports.get = (async (req, res) => {
    console.log('ALL PRODUCTS')
    console.log('req', req.query.filters)
    try {
        // throw new Error('xxxxxxxxxxxxxxxxxxx')
        const response = await axios.get(config.ProductMicroservice.productByFilterUrl,
            {
                params: { filters: req.query.filters }
            })
        res.send(response.data);
    } catch (error) {
        error.statusCode = 433;
        error.customMessage = 'Problems getting products from database!'
        return errorHandler.handleError('product.controller#get', res, 500, error);
    }
});

exports.getById = (async (req, res) => {
    console.log('PRODUCT BY ID')
    try {
        // throw new Error('xxxxxxxxxxxxxxxxxxx')
        console.log('req.params', req.params)
        const response = await axios.get(config.ProductMicroservice.productByIdUrl,
            {
                params: { id: req.params }
            })
        res.send(response.data);
    } catch (error) {
        error.statusCode = 533;
        error.customMessage = 'Problems getting product from database!'
        return errorHandler.handleError('product.controller#getById', res, 500, error);
    }
});

