// const IndexService = require('../services/index.service');

exports.get = (async (req, res) => {
    console.log('IndexController called...')
    res.sendFile(process.env.INDEX);
})

// module.exports = (app) => {
//     app.get('/*', (req, res) => {
//         console.log('IndexController called...')
//         res.sendFile(process.env.INDEX);
//     })
// }