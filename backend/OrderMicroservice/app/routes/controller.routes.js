const orderRoutes = require('./order.routes');

module.exports = (app) => {
    app.use('/order', orderRoutes);
}
