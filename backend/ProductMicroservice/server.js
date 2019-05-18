const express = require('express')
const configureExpressServer = require('./app/server/express.server');
const configureControllersRoutes = require('./app/routes/controller.routes');
const configureModels = require('./app/models/models')
require('dotenv').config()

try {
    let server = express();    

    configureExpressServer(server);
    configureControllersRoutes(server);
    configureModels();

    const PORT = 4220;

    server.listen(PORT, () => {
        console.log(`hsupp01 ProductMicroservice server running on port: ${PORT}`)
    })
} catch (error) {
    console.log('PRODUCT MICROSERVICE ERROR ', error)
    throw error;
}
