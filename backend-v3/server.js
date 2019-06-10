const configureExpressServer = require('./app/server/express.server');
const configureControllerRoutes = require('./app/routes/controller.routes');
const configureModels = require('./app/models/models')
const configureDatabase = require('./app/database/database');
const errorHandler = require('./app/errors/errorHandler');
const express = require('express');
require('dotenv').config()

const app = express();
configureExpressServer(app);
configureControllerRoutes(app);
configureModels();
configureDatabase();
app.use(errorHandler);
const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
    console.log(`hsupp02 server running on port: ${PORT}`)
})