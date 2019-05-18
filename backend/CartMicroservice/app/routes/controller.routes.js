const cartRoutes = require('./cart.routes');

module.exports = (app) => {
    app.use('/cart', cartRoutes);
}

// module.exports = (app) => {
//     console.log('CONFIGURING USER CONTROLLER ROUTES');
//     require('../controllers/cart.controller')(app);      
// }
