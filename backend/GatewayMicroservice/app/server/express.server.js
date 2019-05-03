const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');

process.env.DIST = path.join(__dirname, '../../../../dist/hsupp02');
process.env.INDEX = path.join(process.env.DIST, '/index.html');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(morgan('common'));
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: process.env.SECRET
    }));
    app.use(express.static(process.env.DIST));
    app.set('port', process.env.PORT)

}

