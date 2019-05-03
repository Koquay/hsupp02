const config = require('../config/config');
const axios = require('axios');

module.exports = (app) => {
    console.log('PRODUCT MICROSERVICE CONTROLLER');

    app.get('/product', async (req, res) => {
        console.log('PRODUCTMICROSERVICE ALL PRODUCTS')
        try {
            const response = await axios.get(config.DatabaseMicroservice.productByFilterUrl, 
                {
                    params: {filters: req.query.filters}
                })
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });

    app.get('/product/id', async (req, res) => {
        console.log('PRODUCTMICROSERVICE PRODUCT BY ID')
        try {
            const response = await axios.get(config.DatabaseMicroservice.productByIdUrl, 
                {
                    params: {id: req.query.id}
                })
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });

    app.get('/product/heartbeat', (req, res) => {
        console.log('\n*** PRODUCT MICROSERVICE CALLED ***')
        res.json({ msg: "PRODUCT MICROSERVICE ALIVE AND WELL!!!" });
    })
}