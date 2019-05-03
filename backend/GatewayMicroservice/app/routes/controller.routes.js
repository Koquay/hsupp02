
module.exports = (app) => {
    require('../controllers/index.controller')(app); 
    require('../controllers/user.controller')(app); 
    require('../controllers/product.controller')(app);     
    // require('../controllers/cart.controller')(app);   
    // require('../controllers/index.controller')(app);    
}
