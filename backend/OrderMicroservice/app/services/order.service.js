require('../models/order.model')

const Order = require('mongoose').model("Order");
// const Cart = require('mongoose').model('Cart');
// const errorHandler = require('../util/error-handler');

exports.add = async (order) => {
    console.log('***createOrder***');
    // const email = JSON.parse(req.headers.credentials).email;    
    // const order = JSON.parse(req.body.order);
    // console.log('order', order);

    const delivery = order.delivery;
    const payment = order.payment;
    const orderItems = order.orderItems;
    console.log('delivery', delivery);
    console.log('payment', payment);
    console.log('orderItems', orderItems);


    try {
        let newOrder = await Order.create({delivery:delivery, payment:payment, orderItems:orderItems});
        console.log('newOrder', newOrder);

        // await deleteCart(email, res);

        res.status(201).json(newOrder);

    } catch(error) {
        // return errorHandler.handleError('createOrder', res, 500, error);
        throw error
    }

    return;
}

// var deleteCart = async (email, res) => {
//     try {
//         const cart = await Cart.deleteOne({email:email});
//         console.log('deleted cart', cart);
//     } catch(error) {
//         return errorHandler.handleError('deleteCart', res, 500, error);
//     }
// }

class Test {
    constructor() {}
}