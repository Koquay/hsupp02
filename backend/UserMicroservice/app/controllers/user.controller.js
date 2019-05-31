const UserMicroservice = require('../services/user.microservice.service');
const axios = require('axios');
const config = require('../config/config')

exports.signin = (async (req, res) => {
    console.log('USER SIGNIN')
    console.log('user', req.body)

    try {
        const response = await axios.get(config.DatabaseMicroservice.userSigninUrl,
            {
                params: { user: req.body }
            })
        console.log('UserMicroservice response.data', response.data)
        res.send(response.data);
    } catch (error) {
        console.log('UserMicroservice error.response.data', error.response.data)
        res.send(error.response.data)        
    }
});

