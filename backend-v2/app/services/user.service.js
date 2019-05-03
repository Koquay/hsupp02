
require('../models/user.model');
const User = require('mongoose').model('User');
const PasswordUtil = require('../util/password.util');
const ErrorHandler = require('../errors/error-handler')

exports.signin = async (req, res) => {
    console.log('### user.service#signin')
    let user = {name, email, password, token} = req.body;

    try {
        let existingUser = await User.findOne({ email: user.email });
        console.log('found user: ', existingUser)

        if (existingUser == null) {
            throw new Error('User is not regstered!');
        }

        if (await PasswordUtil.check(user.password, existingUser.password) == true) {
            existingUser.token = PasswordUtil.generateAccessToken(existingUser, user.password);
            console.log('existingUser token', existingUser.token)
            console.log('existingUser', existingUser)
            delete existingUser.password;
            let credentials = { name: existingUser.name, email: existingUser.email, token: existingUser.token };
            return credentials;
        }
    } catch (error) {
        new ErrorHandler(res, error);
    }
}

create = async (user, password) => {
    try {
        user.password = await this.passwordUtil.hash(user.password);
        user = await User.create(user);
        return this.generateAccessToken(user);
    } catch (error) {
        throw new Error('Problem creating user!');
    }
}


