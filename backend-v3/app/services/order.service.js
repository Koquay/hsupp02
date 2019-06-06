require('../models/order.model')

const Order = require('mongoose').model("Order");

exports.add = async (order) => {
    console.log('***createOrder***');

    const newOrder = JSON.parse(order);
    const delivery = newOrder.delivery;
    const payment = newOrder.payment;
    const orderItems = newOrder.orderItems;

    try {
        let newOrder = await Order.create({delivery:delivery, payment:payment, orderItems:orderItems});
        console.log('newOrder', newOrder);        

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

