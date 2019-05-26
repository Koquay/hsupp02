const express = require('express')
const configureExpressServer = require('./app/server/express.server');
const configureRoutes = require('./app/routes/controller.routes');
require('dotenv').config()

try {
    let server = express();
    configureExpressServer(server);
    configureRoutes(server);
    // configureModels();

    const PORT = 4250;

    server.listen(PORT, () => {
        console.log(`hsupp01 OrderMicroservice server running on port: ${PORT}`)
    })
} catch (error) {
    console.log('ORDER MICROSERVICE ERROR ', error)
    throw error;
}
