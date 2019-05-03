const configureExpressServer = require('./app/server/express.server');
const configureControllerRoutes = require('./app/routes/controller.routes');
// const configureModels = require('./app/models/models')
// const configureDatabase = require('./app/database/database');
// const configureErrorHandler = require('./app/errors/error.handler');
// const configureRedisCache = require('./app/cache/redis-cache');
const express = require('express');
require('dotenv').config()
// const axios = require('axios');

const server = express();
configureExpressServer(server);
configureControllerRoutes(server);
// configureModels();
// configureDatabase();
// // configureRedisCache();
// configureErrorHandler(server);

const PORT = process.env.PORT || 4500;
server.listen(PORT, () => {
    console.log(`hsupp02 server running on port: ${PORT}`)
})