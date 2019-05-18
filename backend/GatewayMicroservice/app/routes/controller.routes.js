const orderRoutes = require('../routes/order.routes');
const userRoutes = require('../routes/user.routes');
const cartRoutes = require('../routes/cart.routes');
const productRoutes = require('../routes/product.routes');
const indexRoutes = require('../routes/index.routes');

module.exports = (app) => {
    app.use('/api/order', orderRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/cart', cartRoutes);
    app.use('/api/product', productRoutes);
    app.use('/*', indexRoutes);
}

