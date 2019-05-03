module.exports = class CommonMiddleware {
    constructor() {
        this.express = require('express');
        this.path = require('path');
        this.morgan = require('morgan');
        this.compress = require('compression');
        this.bodyParser = require('body-parser');
        this.methodOverride = require('method-override');
        this.session = require('express-session');        
        this.helmet = require('helmet');
        this.cors = require('cors');
    }
}