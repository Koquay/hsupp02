
module.exports = (app) => {
    console.log('CONFIGURING USER CONTROLLER ROUTES');
    require('../controllers/cart.controller')(app);      
}
