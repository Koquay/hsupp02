const userRoutes = require('./user.routes');

module.exports = (app) => {
    app.use('/user', userRoutes);
}


// module.exports = (app) => {
//     console.log('CONFIGURING USER CONTROLLER ROUTES');
//     require('../controllers/user.controller')(app);      
// }
