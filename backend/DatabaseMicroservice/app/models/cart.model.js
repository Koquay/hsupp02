const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const ProductSchema = new Schema({
    name:String,
    producttype:String,
    brand:String,
    model:String,
    price:Number,
    list_price:Number,
    description:String,
    rating:String,
    sku:String,
    feature:[String],
    image:[String],
    images: {black:[], white:[], stainless:[]},
    specifications:{},    
});
// mongoose.model('Product', ProductSchema, 'product');

const CartSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true,
        validate(email) {
            if(!validator.isEmail(email)) {
                throw new Error('EMAIL IS INVALIDATE')
            }
        }
    },
    // items:[
    //     { type: Schema.Types.ObjectId, ref: 'Product', quantity:Number }
    // ],

    items:[{product:ProductSchema, quantity:Number}],
    createdOn: {
        type:Date,
        default: Date.now
    }
});

mongoose.model('Cart', CartSchema, 'cart');