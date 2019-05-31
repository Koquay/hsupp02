const axios = require('axios');
const config = require('../config/config');
const errorHandler = require('../util/error.handler');

exports.signin = (async (req, res) => {
    console.log('USER SIGNIN BEGINS')
    const email = req.body.email;
    console.log('email', email)

    try {
        console.log('GATEWAY user', req.body)
        
        const response = await axios.post(config.UserMicroservice.signinUrl, req.body)

        // let error = response.data.error.errorMessage;

        if(response.data.user.errorMessage) {
            console.log('GATEWAY USERCONTROLLER RESPONSE', response.data.user)            
            const userData = { user: response.data.user, cart: {} }
            res.send(userData); 
            return;
        }       

        const response2 = await axios.get(config.CartMicroservice.cartUrl,
            {
                params: { email: email }
            })
        console.log('response2.data cart', response2.data);    

        if(response2.data.cart.errorMessage) {
            console.log('GATEWAY USERCONTROLLER RESPONSE 2', response2.data.cart)            
            const userData = { user: response.data.user, cart: response2.data.cart }
            res.send(userData);
            return;
        }

        const userData = { user: response.data.user, cart: response2.data.cart }

        res.send(userData);
    } catch (error) {
        error.statusCode = 533;
        error.customMessage = 'Problems signing in user!'
        return errorHandler.handleError('user.controller#signin', res, 500, error);
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