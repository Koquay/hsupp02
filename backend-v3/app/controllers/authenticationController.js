const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const errorHandler = require('../util/error.handler');

exports.authenticate = async (req, res, next) => {
    console.log('\n### user.controller#authenticate ###')
    const token = JSON.parse(req.headers.user).token;

    if (token) {
        try {
            console.log('SECRET', process.env.SECRET)
            await jwt.verify(token, process.env.SECRET);
            next();
        } catch (error) {
            // return errorHandler.handleError('authentication', res, 500, error);
            error.statusCode = 533;
            error.customMessage = 'Problems verifying user token!'
            return errorHandler.handleError('authentication.controller#authentication', res, 500, error);

        }
    } else {
        // return errorHandler.handleError('authentication', res, 500, 'NO TOKEN FOUND!');
        throw error
    }
}