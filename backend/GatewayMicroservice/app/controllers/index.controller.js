// const IndexService = require('../services/index.service');

module.exports = (app) => {
    app.get('/*', (req, res) => {
        console.log('IndexController called...')
        res.sendFile(process.env.INDEX);
    })
}