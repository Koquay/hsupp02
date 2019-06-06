const UserService = require('../services/user.service');
const CartService = require('../services/cart.service');

exports.signin = (async (req, res) => {
    console.log('\n*** DATABASE USER SIGNIN CALLED ***')   

    try {
        console.log('req.body.email', req.body.email)
        console.log('req.body', req.body)
        // let userObj = JSON.parse(req.query.user);
        let user = await UserService.signin(res, req.body);     
        let cart = await CartService.getCart(req.body.email, res);
        console.log('user.controller cart', cart)

        let userData = {user:user, cart:cart};
        res.status(200).json(userData);
    } catch (error) {   
        let user = {};
        user.errorMessage = error.message;
        user.errorStatus = error.status;
        console.log('****** DatabaseMicroservice user.controller **********', user)
        res.status(error.status).json({ user });
    }
});
