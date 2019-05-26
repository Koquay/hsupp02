require('../models/order.model')

const Order = require('mongoose').model("Order");
// const Cart = require('mongoose').model('Cart');
// const errorHandler = require('../util/error-handler');

exports.add = async (order) => {
    console.log('***createOrder***');

    const delivery = order.delivery;
    const payment = order.payment;
    const orderItems = order.orderItems;

    try {
        let newOrder = await Order.create({delivery:delivery, payment:payment, orderItems:orderItems});
        console.log('newOrder', newOrder);

        // await deleteCart(email, res);

        return(newOrder);

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