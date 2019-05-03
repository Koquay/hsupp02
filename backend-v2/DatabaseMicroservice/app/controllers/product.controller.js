const ProductService = require('../services/product.service');

module.exports = (app) => {
    app.get('/product', async (req, res) => {
        console.log('\n*** GET DATABASEMICROSERVICE PRODUCTS CALLED ***')

        try {
            console.log('req.params', req.query.filters)
            let products = await ProductService.getProducts(res, req.query.filters);   
            res.status(200).json(products)
        } catch (error) {
            throw error;
        }
    });

    app.get('/product/id', async (req, res) => {
        console.log('\n*** GET DATABASEMICROSERVICE PRODUCTS BY ID CALLED ***')

        try {
            const id = JSON.parse(req.query.id).id;
            console.log('id', id)

            let products = await ProductService.getProductById(id, res);   
            res.status(200).json(products)
        } catch (error) {
            throw error;
        }
    });

}