const UserMicroservice = require('../services/user.microservice.service');
const axios = require('axios');
const config = require('../config/config')

module.exports = (app) => {
    console.log('USER MICROSERVICE CONTROLLER');

    app.post('/user/signin', async (req, res) => {
        console.log('USER SIGNIN')
        console.log('user', req.body)

        try {
            const response = await axios.get(config.DatabaseMicroservice.userSigninUrl,
                {
                    params: { user: req.body }
                })
            res.send(response.data);
        } catch (error) {
            throw error;
        }
    });

    app.get('/usermicroservice/heartbeat', (req, res) => {
        console.log('\n*** USER MICROSERVICE CALLED ***')
        res.json({ msg: "RETURNED FROM USER MICROSERVICE xxx" });
    })
}