require('../models/product.model');
const ErrorHandler = require('../errors/error-handler')
const redisClient = require('../cache/redis-cache');
const Product = require('mongoose').model('Product');
const mongoose = require('mongoose');

exports.getProductById = async (id, res) => {
    let product = await fetchProductFromCache(id);

    if (product == null) {
        try {            
            const dbId = mongoose.Types.ObjectId(id)
            product = await Product.findById(dbId);
            setProductInCache(id, product);
            console.log('PRODUCT FROM DB ');
        } catch (error) {
            throw error;
            // new ErrorHandler(res, error);
        }
    }
    return product;
}

const fetchProductFromCache = async (id) => {
    return new Promise((resolve, reject) => {
        redisClient.getProduct(id, (error, product) => {
            if (error) {
                console.log('error', error);
                reject(error);
            } else if (product) {
                console.log('PRODUCT FROM CACHE ');
                resolve(product);
            } else {
                console.log('NO PRODUCT FROM CACHE ');
                resolve(null);
            }
        });
    });
}

const setProductInCache = (id, product) => {
    redisClient.setProduct(id, product);
}

exports.getProducts = async (res, filters) => {
    console.log('\n#### ProductService#getProducts ####')

    let { brands, priceRanges, rating, pageNo, pageSize, sortFilter } = JSON.parse(filters);
    console.log('priceRanges', priceRanges)
    

    let aggregatePipeLine = [];
    aggregatePipeLine.push(buildBrandMatch(brands));
    aggregatePipeLine    .push(buildPriceRangeMatch(priceRanges));
    aggregatePipeLine.push(buildRatingMatch(rating));
    aggregatePipeLine.push(buildSortMatch(sortFilter));
    checkForEmptyAggregate(aggregatePipeLine);
    aggregatePipeLine.push(buildPageNumberFilter(pageNo));
    aggregatePipeLine.push(buildPageSizeFilter(pageSize));

    console.log('aggregatePipeLine', aggregatePipeLine)

    try {
        let products = await Product.aggregate(aggregatePipeLine);
        // console.log('products', products)
        return products;
    } catch (error) {
        console.log('error', error);
        new ErrorHandler(res, error);
    }
}

function buildBrandMatch(brands) {
    if (brands.length) {
        return { $match: { brand: { $in: brands } } }
    }
}

function buildPriceRangeMatch(priceRanges) {
    if (priceRanges.length) {
        let filter = [];
        let $or = [];

        for (let priceRange of priceRanges) {
            $or.push({ $and: [{ $gte: ['$price', +priceRange.low] }, { $lte: ['$price', +priceRange.high] }] });
        }

        return { $match: { $expr: { $or: $or } } };
    }
}

function buildRatingMatch(rating) {
    if (rating) {
        return { $match: { rating: rating.toString() } }
    }
}

function buildSortMatch(sortFilter) {
    let filter;
    if (sortFilter.field == 'price') {
        filter = { $sort: { price: sortFilter.direction } }
    } else if (sortFilter.field == 'rating') {
        filter = { $sort: { rating: sortFilter.direction } };
    }

    return filter;
}

function buildPageNumberFilter(pageNo) {
    return { $skip: pageNo };
}

function buildPageSizeFilter(pageSize) {
    return { $limit: pageSize };
}

function checkForEmptyAggregate(aggregatePipeLine) {
    if (aggregatePipeLine.length == 0) {
        aggregatePipeLine.push({ $match: { brand: { $ne: null } } });
    }
}