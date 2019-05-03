const express = require('express')
const configureExpressServer = require('./app/server/express.server');
const configureRoutes = require('./app/controllers/cart.controller');
// const configureModels = require('./app/models/models')
require('dotenv').config()

try {
    let server = express();    
    configureExpressServer(server);
    configureRoutes(server);
    // configureModels();

    const PORT = 4240;

    server.listen(PORT, () => {
        console.log(`hsupp01 CartMicroservice server running on port: ${PORT}`)
    })
} catch (error) {
    console.log('CART MICROSERVICE ERROR ', error)
    throw error;
}
