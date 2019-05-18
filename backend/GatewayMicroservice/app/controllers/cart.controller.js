// const CartService = require('../services/cart.service');
const axios = require('axios');
const config = require('../config/config');

exports.get = (async (req, res) => {
    console.log('GATEWAY GET CART')
    try {
        console.log('req.headers', req.headers)
        const email = req.headers.email;
        console.log('email', email)
        const response = await axios.get(config.CartMicroservice.cartUrl,
            {
                params: { email: email }
            })
        res.send(response.data);
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
});

exports.add = (async (req, res) => {
    console.log('GATEWAY ADD TO CART')
    console.log('req.body', req.body)
    let email = JSON.parse(req.headers.user).email;
    let item = req.body;
    let payload = { email: email, item: item };

    console.log('email', email)

    try {
        const response = await axios.post(config.CartMicroservice.cartAddUrl, payload)

        res.status(201).json(response.data);
        // res.send({})
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

exports.delete = (async (req, res) => {
    console.log('GATEWAYMICROSERVICES delete')

    const email = JSON.parse(req.headers.user).email;

    let payload = { email: email, id: req.params.id };

    try {
        const cart = await axios.put(config.CartMicroservice.cartDeleteUrl, payload)
        console.log('GATEWAYMICROSERVICES delete cart', cart.data)
        res.status(201).json(cart.data);

        // res.json({})
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

// module.exports = (app) => {
//     app.get('/api/cart', async (req, res) => {
//         console.log('GATEWAY GET CART')
//         try {
//             console.log('req.headers', req.headers)
//             const email = req.headers.email;
//             console.log('email', email)
//             const response = await axios.get(config.CartMicroservice.cartUrl,
//                 {
//                     params: { email: email }
//                 })
//             res.send(response.data);
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     });

//     app.patch('/api/cart/add', async (req, res) => {
//         console.log('GATEWAY ADD TO CART')
//         console.log('req.body', req.body)
//         let email = JSON.parse(req.headers.user).email;
//         let item = req.body;
//         let payload = { email: email, item:item };

//         console.log('email', email)

//         try {
//             const response = await axios.post(config.CartMicroservice.cartAddUrl, payload)

//             res.status(201).json(response.data);
//             // res.send({})
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     })

//     app.delete('/api/cart/delete/:id', async (req, res) => {
//         console.log('GATEWAYMICROSERVICES delete')

//         const email = JSON.parse(req.headers.user).email;

//         let payload = { email: email, id:req.params.id };

//         try {
//             const cart = await axios.put(config.CartMicroservice.cartDeleteUrl, payload)
//             console.log('GATEWAYMICROSERVICES delete cart', cart.data)
//             res.status(201).json(cart.data);          

//             // res.json({})
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     })
// }

