const redis = require('redis');
const redisClient = redis.createClient();
const CACHE_TTL = 60;

redisClient.on('connect', function() {
    console.log('Redis client connected');
});

redisClient.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

exports.setProduct = (key, results) => {
    results = JSON.stringify(results);
    redisClient.setex(key, CACHE_TTL, results);
}

exports.getProduct = (query, callback) => {
    redisClient.get(query, (err, results) => {
        if (err) { return callback(err, results); }

        return callback(err, JSON.parse(results));
    })
}

exports.getCart = (email, callback) => {
    redisClient.get(email, (err, cart) => {
        if (err) { return callback(err, null) }

        console.log('GET CART FROM CACHE ')
        return callback(err, JSON.parse(cart));
    })
}

exports.setCart = (email, cart) => {
    cart = JSON.stringify(cart);
    redisClient.setex(email, CACHE_TTL, cart);
}