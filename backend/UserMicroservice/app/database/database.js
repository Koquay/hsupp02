const mongoose = require('mongoose');
require('../models/user.microservice.model');
const errorHandler = require('../util/error.handler');

module.exports = async () => {
    console.log('process.env.DB', process.env.DB)
    try {
        await mongoose.connect(process.env.DB, { useNewUrlParser: true })
        console.log('\n### CONNECTED TO MONGODB ###')
    } catch (error) {
        console.log('\n*** FAILED TO CONNECT TO MONGODB ###', error.errmsg);
        // return errorHandler.handleError(error, res);
    }
}