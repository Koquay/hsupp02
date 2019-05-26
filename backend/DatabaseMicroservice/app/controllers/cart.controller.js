const CartService = require('../services/cart.service');

exports.get = (async (req, res) => {
    console.log('DATABASE CONTROLLER GET CART')
    console.log('req.query.email', req.query.email)
    try {

        const cart = await CartService.getCart(req.query.email, res);
        res.status(200).json(cart);

    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
});

exports.add = (async (req, res) => {
    console.log('DATABASE CONTROLLER ADD TO CART')

    let payload = JSON.parse(req.query.payload);

    try {
        const cart = await CartService.addItem(payload.email, payload.item, res)
        res.status(201).json(cart);
       
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

exports.delete = (async (req, res) => {
    try {
        console.log('DATABASE delete req.query', req.query);

        let payload = JSON.parse(req.query.payload);

        const cart = await CartService.removeItem(payload.id, payload.email)
        console.log('DATABASE cart delete', cart);
        res.send(cart);
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})

exports.deleteAll = (async (req, res) => {
    try {
        console.log('DATABASE delete All req.query', req.query);

        let payload = JSON.parse(req.query.payload);

        const cart = await CartService.removeAllItems(payload.email)
        console.log('DATABASE cart delete all ', cart);
        res.send({});
    } catch (error) {
        console.log('controller error', error)
        return res.status(500).send(error)
    }
})


// module.exports = (app) => {
//     app.get('/cart', async (req, res) => {
//         console.log('DATABASE CONTROLLER GET CART')
//         console.log('req.query.email', req.query.email)
//         try {

//             const cart = await CartService.getCart(req.query.email, res);
//             res.status(200).json(cart);
//             // res.send({})
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     });

//     app.get('/cart/add', async (req, res) => {
//         console.log('DATABASE CONTROLLER ADD TO CART')

//         // console.log('req.query', req.query)
//         // console.log('req.params', req.params)
//         // console.log('req.body', req.body)
//         let payload = JSON.parse(req.query.payload);

//         try {
//             const cart = await CartService.addItem(payload.email, payload.item, res)
//             res.status(201).json(cart);
//             // res.send({})
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     })

//     app.delete('/cart/delete', async (req, res) => {
//         try {
//             console.log('DATABASE delete req.query', req.query);

//             let payload = JSON.parse(req.query.payload);

//             const cart = await CartService.removeItem(payload.id, payload.email)
//             console.log('DATABASE cart delete', cart);
//             res.send(cart);
//         } catch (error) {
//             console.log('controller error', error)
//             return res.status(500).send(error)
//         }
//     })
// }

