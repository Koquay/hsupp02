// const orderRoutes = require('../routes/order.routes');
const userRoutes = require('./user.routes');
const cartRoutes = require('./cart.routes');
const productRoutes = require('./product.routes');
// const indexRoutes = require('./index.routes');

module.exports = (app) => {
    // app.use('/order', orderRoutes);
    app.use('/user', userRoutes);
    app.use('/cart', cartRoutes);
    app.use('/product', productRoutes);
    // app.use('/*', indexRoutes);
}

