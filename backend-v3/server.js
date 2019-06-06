const configureExpressServer = require('./app/server/express.server');
const configureControllerRoutes = require('./app/routes/controller.routes');
const configureModels = require('./app/models/models')
const configureDatabase = require('./app/database/database');
const express = require('express');
require('dotenv').config()

const server = express();
configureExpressServer(server);
configureControllerRoutes(server);
configureModels();
configureDatabase();
// configureErrorHandler(server);

// const PORT = process.env.PORT || 4500;
const PORT = 4600;

server.listen(PORT, () => {
    console.log(`hsupp02 server running on port: ${PORT}`)
})