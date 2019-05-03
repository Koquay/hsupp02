module.exports = {
    apps: [{
        name: "Gateway Microservice",
        script: './backend-v2/server.js',
        watch: true
    },
    {
        name: "User Microservice",
        script: './backend-v2/UserMicroservice/server.js',
        watch: true
    },
    {
        name: "Product Microservice",
        script: './backend-v2/ProductMicroservice/server.js',
        watch: true
    },
    {
        name: "Cart Microservice",
        script: './backend-v2/CartMicroservice/server.js',
        watch: true
    },
    {
        name: "Database Microservice",
        script: './backend-v2/DatabaseMicroservice/server.js',
        watch: true
    }]
}
