const chalk = require('chalk');
const ValidationError = require('./errors').ValidationError;
// const AuthenticationError = require('./error.-handler')
const AccessDeniedError = require('./errors').AccessDeniedError;

function errorlogger(err, req, res, next) {
    if (err.message) {
        console.log(chalk.default.red(err.message));
    }
    if (err.stack) {
        console.log(chalk.default.red(err.stack));
    }
    next(err);
}

function validationErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.sendStatus(401);
    }
    next(err);
}

function accessDeniedErrorHandler(err, req, res, next) {
    if (err instanceof AccessDeniedError) {
        return res.sendStatus(400);
    }
    next(err);
}

// function authenticationErrorHandler(err, req, res, next) {
//     if (err instanceof AuthenticationError) {
//         console.log('INSTANCE OF AUTHENTICATION ERROR')
//         return res.sendStatus(403);
//     }
//     next(err);
// }

function genericErrorHandler(err, req, res, next) {
    return res.sendStatus(500);
    next();
}

module.exports = function ErrorHandlingMiddleware(app) {
    app.use([
        errorlogger,
        // authenticationErrorHandler,
        validationErrorHandler,
        accessDeniedErrorHandler,
        genericErrorHandler
    ])
}

