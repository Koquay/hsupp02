const UserService = require('../services/user.service');
const CartService = require('../services/cart.service');
const errorHandler = require('../errors/error-handler');

exports.signin = (async (req, res) => {
    console.log('\n*** DATABASE USER SIGNIN CALLED ***')   

    try {
        console.log('req.body.email', req.body.email)
        console.log('req.body', req.body)

        let user = await UserService.signin(res, req.body);    
        
        if(user.error) {
            return errorHandler.handleError('SIGN IN', res, user.error);
        }
        let cart = await CartService.getCart(req.body.email, res);
        console.log('user.controller cart', cart)

        if(cart.error) {
            return errorHandler.handleError('SIGN IN', res, cart.error);
        }

        let userData = {user:user, cart:cart};
        res.status(200).json(userData);
    } catch (error) {   
        error.status = 500;
        return errorHandler.handleError('USER CONTROLLER SIGNIN ERROR', res, error);
    }
});
