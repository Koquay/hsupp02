const express = require('express')
const configureControllerRoutes = require('./app/routes/controller.routes');
const configureModels = require('./app/models/models')
const configureDatabase = require('./app/database/database');
require('dotenv').config()

try {
    let server = express();    
    configureControllerRoutes(server);
    configureModels();
    configureDatabase();

    const PORT = 4230;

    server.listen(PORT, () => {
        console.log(`hsupp01 DatabaseMicroservice server running on port: ${PORT}`)
    })
} catch (error) {
    console.log('DatabaseMicroservice ERROR ', error)
    throw error;
}
