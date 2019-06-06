const OrderService = require('../services/order.service');
const CartService = require('../services/cart.service');

exports.add = (async (req, res) => {
    console.log('CONTROLLER ADD ORDER')    
    const email = JSON.parse(req.headers.user).email;

    try {
        const newOrder = await OrderService.add(req.body.order);

        // await CartService.removeAllItems(email);
        // console.log('new order', newOrder)
        res.status(201).json(newOrder);

    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

