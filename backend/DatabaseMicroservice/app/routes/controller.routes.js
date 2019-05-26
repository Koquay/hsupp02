const userRoutes = require('./user.routes');
const cartRoutes = require('./cart.routes');
const productRoutes = require('./product.routes');
const orderRoutes = require('./order.routes');

module.exports = (app) => {
    app.use('/user', userRoutes);
    app.use('/cart', cartRoutes);
    app.use('/product', productRoutes);
    app.use('/order', orderRoutes);
}

