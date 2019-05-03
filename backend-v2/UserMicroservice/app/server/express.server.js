const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Header", "Origin, X-Request-With, Content-Type, Accept")
        next();
    })
    app.use(cors());
    app.use(bodyParser.json());
    app.use(morgan('common'));
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // app.use(express.static(process.env.DIST));
    app.set('port', process.env.PORT)

}

