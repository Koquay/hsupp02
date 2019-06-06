
require('../models/user.microservice.model');
const User = require('mongoose').model('User');
const PasswordUtil = require('../util/password.util');
const ErrorHandler = require('../errors/error-handler');

exports.signin = async (res, user) => {
    console.log('### user.service#signin')
    // let user = {name, email, password, token} = req.body;

    console.log('user.microservice user ', user)
    console.log('user.microservice user email', user.email)

    try {
        let existingUser = await User.findOne({ email: user.email });
        console.log('found user: ', existingUser)

        existingUser = null;

        if (existingUser == null) {
            console.log('************* existingUser is null')
            let error = new Error()
            error.message = 'User is not registered!'
            error.status = "404";
            throw error;
        }

        if (await PasswordUtil.check(user.password, existingUser.password) == true) {
            existingUser.token = PasswordUtil.generateAccessToken(existingUser, user.password);
            delete existingUser.password;
            let credentials = { name: existingUser.name, email: existingUser.email, token: existingUser.token };
            return credentials;
        }
    } catch (error) {
        console.log('ERROR CAUGHT IN SIGNIN ERROR BLOCK')
        ErrorHandler.handleError('user.service#signin', res, 400, error);        
    }
}

// create = async (user, password) => {
//     try {
//         user.password = await this.passwordUtil.hash(user.password);
//         user = await User.create(user);
//         return this.generateAccessToken(user);
//     } catch (error) {
//         throw new Error('Problem creating user!');
//     }
// }


