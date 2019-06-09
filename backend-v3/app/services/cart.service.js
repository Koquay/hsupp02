const errorHandler = require('../util/error.handler');
require('../models/cart.model');
const Cart = require('mongoose').model('Cart');
// const redisClient = require('../cache/redis-cache');

exports.getCart = async (email, res) => {
    console.log('\n#### cartService#getCart ####');
    let cart = {};

    try {
        // throw new Error();

        // let cart = await fetchCartFromCache(email);

        if (cart == null) {
            cart = await Cart.findOne({ email: email });
            console.log('CART FROM DATABASE');
            // redisClient.setCart(email, cart);

            if (cart == null) {
                cart = new Cart({ email: email, items: [] });
                cart = await cart.save()
            }
        }
        return cart;
    } catch (error) {
        console.log('CART SERVICE GET CART ERROR')

        error = new Error()
        error.message = 'Problem retrieving user cart!'
        error.status = "404";       
        cart.error = error;
        return cart;
    }
}

exports.addItem = async (email, item, res) => {
    console.log('\n*** CartService#add ***')
    
    try {
        // throw new Error();

        let cart = await Cart.findOneAndUpdate({email:email},
        {$push: {items: {product:item.product, quantity:item.quantity}}}, {upsert:true, new:true, runValidators:true})
        
        console.log('cart', cart)
                
        return cart;
    } catch(error) {
        error = new Error()
        error.message = 'Problem adding item to cart.'
        error.status = "400";
        throw error;
    }    
}

exports.removeItem = async(itemId, email) => {
    console.log('\n### removeItem ###')
    console.log('DATABASE service removeItem itemId', itemId)
    console.log('DATABASE service removeItem email', email)   

    try {
        let cart = await Cart.findOneAndUpdate({email:email}, 
            {$pull: {items: {_id:itemId}}}, {new:true});

        console.log('DATABASE service removeItem cart', cart)
        return cart;
    } catch(error) {
        console.log('error', error);
        let errMsg = {code: 500, message: 'Problem deleting item from cart.'}
        new ErrorHandler(res, errMsg);
    }
}


exports.removeAllItems = async(email) => {
    console.log('\n### remove all Items ###')
    console.log('DATABASE service removeItem email', email)   

    try {
        let cart = await Cart.findOneAndUpdate({email:email}, {items: []},
            {new:true});

        console.log('DATABASE service removeItem cart', cart)
        return cart;
    } catch(error) {
        console.log('error', error);
        let errMsg = {code: 500, message: 'Problem deleting item from cart.'}
        new ErrorHandler(res, errMsg);
    }
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