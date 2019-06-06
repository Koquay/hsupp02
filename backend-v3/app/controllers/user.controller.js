const UserService = require('../services/user.service');
const CartService = require('../services/cart.service');
const ErrorHandler = require('../errors/error-handler');

exports.signin = (async (req, res) => {
    console.log('\n*** DATABASE USER SIGNIN CALLED ***')   

    try {
        console.log('req.body.email', req.body.email)
        console.log('req.body', req.body)

        // throw new Error('Problem signing in user.');

        let user = await UserService.signin(res, req.body);     
        let cart = await CartService.getCart(req.body.email, res);
        console.log('user.controller cart', cart)

        let userData = {user:user, cart:cart};
        res.status(200).json(userData);
    } catch (error) {   
        return ErrorHandler.handleError('controller#signin', res, 400, error);
    }
});
