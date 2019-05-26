const axios = require('axios');
const config = require('../config/config');

exports.add = async (req, res) => {
    console.log('GATEWAY post /api/order')
    const email = JSON.parse(req.headers.user).email;
    const order = req.body.order;
    console.log('order', order);
    console.log('email', email);


    const payload = {
        email: email,
        order: order
    }

    try {
        const order = await axios.post(config.OrderMicroservice.orderAddUrl, payload);
        const cart = await axios.put(config.CartMicroservice.cartDeleteAllUrl, {email:email})

        console.log('GATEWAY order', order.data);
        res.send(order.data)
    } catch (error) {
        throw error;
    }
}