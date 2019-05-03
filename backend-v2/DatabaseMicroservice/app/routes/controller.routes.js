
module.exports = (app) => {
    console.log('CONFIGURING DATABASE CONTROLLER ROUTES');
    require('../controllers/product.controller')(app);      
    require('../controllers/user.controller')(app);   
    require('../controllers/cart.controller')(app);  
}
