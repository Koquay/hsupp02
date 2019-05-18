const configureExpressServer = require('./app/server/express.server');
const configureControllerRoutes = require('./app/routes/controller.routes');
const express = require('express');
require('dotenv').config()

const server = express();
configureExpressServer(server);
configureControllerRoutes(server);

// configureErrorHandler(server);

const PORT = process.env.PORT || 4500;
server.listen(PORT, () => {
    console.log(`hsupp02 server running on port: ${PORT}`)
})