const axios = require('axios');
const config = require('../config/config');

module.exports = (app) => {
    app.post(config.UserMicroservice.signIn, async (req, res) => {
        console.log('USER SIGNIN BEGINS')
        try {
            console.log('GATEWAY user', req.body)
            const response = await axios.post(config.UserMicroservice.signinUrl, req.body)
            res.send(response.data.user);
        } catch (error) {
            throw error;
        }
    });

    app.get('/api/user/heartbeat', async (req, res) => {
        try {
            console.log('USER HEARTBEAT CALLER BEGINS')
            axios.get('http://localhost:4210/usermicroservice/heartbeat')
                .then(function (resp) {
                    console.log('USER HEARTBEAT CALLER')
                    console.log('resp', resp.data)
                    res.send(resp.data.msg);
                })
                .catch(function (error) {
                    console.log('USER HEARTBEAT ERROR ', error)
                })
        } catch (error) {
            console.log("HEARTBEAT ERROR 2", error)
        }
    });
}