const ErrorHandler = require('../errors/error-handler')
require('../models/cart.model');
const Cart = require('mongoose').model('Cart');
const redisClient = require('../cache/redis-cache');

exports.getCart = async (email, res) => {
    console.log('\n#### cartService#getCart ####');

    try {
        let cart = await fetchCartFromCache(email);

        if (cart == null) {
            cart = await Cart.findOne({ email: email });
            console.log('CART FROM DATABSE');
            redisClient.setCart(email, cart);

            if (cart == null) {
                cart = new Cart({ email: email, items: [] });
                cart = await cart.save()
            }
        }
        return cart;
    } catch (error) {
        console.log('error', error);
        let errMsg = {code: 500, message: 'Problem retrieving user cart.'}
        new ErrorHandler(res, errMsg);
    }
}

exports.addItem = async (email, item, res) => {
    console.log('\n*** CartService#add ***')
    try {
        let cart = await Cart.findOneAndUpdate({email:email},
        {$push: {items: {product:item.product, quantity:item.quantity}}}, {upsert:true, new:true, runValidators:true})
        
        console.log('cart', cart)
                
        return cart;
    } catch(error) {
        console.log('error', error);
        let errMsg = {code: 500, message: 'Problem adding item to cart.'}
        new ErrorHandler(res, errMsg);
    }    
}

exports.removeItem = async(itemId, email) => {
    console.log('\n### removeItem ###')
    console.log('itemId', itemId)
    console.log('email', email)

    try {
        let cart = await Cart.findOneAndUpdate({email:email}, 
            {$pull: {items: {_id:itemId}}}, {new:true});

        return cart;
    } catch(error) {
        console.log('error', error);
        let errMsg = {code: 500, message: 'Problem deleting item from cart.'}
        new ErrorHandler(res, errMsg);
    }
    return {}
}

const fetchCartFromCache = async (email) => {
    return new Promise((resolve, reject) => {
        return redisClient.getCart(email, (error, cart) => {
            if (error) {
                reject(error);
            }
            if (cart) {
                console.log('CART FROM CACHE')
                resolve(cart);
            } else {
                console.log('NO CART FROM CACHE')
                resolve(null);
            }
        })
    })
}