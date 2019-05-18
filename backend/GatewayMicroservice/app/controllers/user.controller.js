const axios = require('axios');
const config = require('../config/config');

exports.signin = (async (req, res) => {        
    console.log('USER SIGNIN BEGINS')
    const email = req.body.email;
    console.log('email', email)

    try {
        console.log('GATEWAY user', req.body)
        const response = await axios.post(config.UserMicroservice.signinUrl, req.body)
                    
        const response2 = await axios.get(config.CartMicroservice.cartUrl,
            {
                params: { email: email }
            })
        console.log('cart', response2.data);

        const userData = {user: response.data.user, cart: response2.data}

        res.send(userData);
    } catch (error) {
        throw error;
    }
});



// module.exports = (app) => {
//     console.log('USER CONTROLLER configured')

//     app.post("/api/user/signin", async (req, res) => {   
//         console.log('USER SIGNIN BEGINS')
//         const email = req.body.email;
//         console.log('email', email)

//         try {
//             console.log('GATEWAY user', req.body)
//             const response = await axios.post(config.UserMicroservice.signinUrl, req.body)
                        
//             const response2 = await axios.get(config.CartMicroservice.cartUrl,
//                 {
//                     params: { email: email }
//                 })
//             console.log('cart', response2.data);

//             const userData = {user: response.data.user, cart: response2.data}

//             res.send(userData);
//         } catch (error) {
//             throw error;
//         }
//     });

//     app.get('/api/user/heartbeat', async (req, res) => {
//         try {
//             console.log('USER HEARTBEAT CALLER BEGINS')
//             axios.get('http://localhost:4210/usermicroservice/heartbeat')
//                 .then(function (resp) {
//                     console.log('USER HEARTBEAT CALLER')
//                     console.log('resp', resp.data)
//                     res.send(resp.data.msg);
//                 })
//                 .catch(function (error) {
//                     console.log('USER HEARTBEAT ERROR ', error)
//                 })
//         } catch (error) {
//             console.log("HEARTBEAT ERROR 2", error)
//         }
//     });
// }