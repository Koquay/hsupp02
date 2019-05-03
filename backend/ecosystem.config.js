module.exports = {
    apps: [
        {
            name: "Gateway Microservice",
            script: './backend/GatewayMicroservice/server.js',
            watch: true
        },
        {
            name: "User Microservice",
            script: './backend/UserMicroservice/server.js',
            watch: true
        },
        {
            name: "Product Microservice",
            script: './backend/ProductMicroservice/server.js',
            watch: true
        },
        {
            name: "Cart Microservice",
            script: './backend/CartMicroservice/server.js',
            watch: true
        },
        {
            name: "Database Microservice",
            script: './backend/DatabaseMicroservice/server.js',
            watch: true
        }]
}
