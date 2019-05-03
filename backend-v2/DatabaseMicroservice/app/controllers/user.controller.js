const UserService = require('../services/user.service');

module.exports = (app) => {
    console.log('DATABASE USER CONTROLLER');

    app.get('/user/signin', async (req, res) => {
        console.log('\n*** DATABASE USER SIGNIN CALLED ***')

        try {
            let userObj = JSON.parse(req.query.user);
            let user = await UserService.signin(res, userObj);
            res.status(200).json({ user });
        } catch (error) {
            throw error;
        }
    });
}