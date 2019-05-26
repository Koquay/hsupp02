const OrderService = require('../services/order.service');

exports.add = (async (req, res) => {
    console.log('DATABASE CONTROLLER ADD ORDER')    

    const email = JSON.parse(req.query.payload).email;
    const order = JSON.parse(req.query.payload).order;

    const orderToSave = JSON.parse(order);
    try {
        const newOrder = await OrderService.add(orderToSave)
        // console.log('new order', newOrder)
        res.status(201).json(newOrder);
    //    res.send({})
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

