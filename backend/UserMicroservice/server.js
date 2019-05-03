const express = require('express')
const configureExpressServer = require('./app/server/express.server');
const configureModels = require('./app/models/models')
const configureDatabase = require('./app/database/database');
// const configureRoutes = require('./app/controllers/user.microservice.controller')
const configureRoutes = require('./app/routes/controller.routes')
require('dotenv').config()

try {
    let server = express();    
    configureExpressServer(server);
    configureRoutes(server);    
    // configureModels();
    // configureDatabase();

    const PORT = 4210;

    server.listen(PORT, () => {
        console.log(`hsupp01 UserMicroservice server running on port: ${PORT}`)
    })
} catch (error) {
    console.log('USER MICROSERVICE ERROR ', error)
    throw error;
}
