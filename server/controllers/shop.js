const Product = require('../models/product.js');
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.send(products);
    });
}
exports.getAddProduct = (req, res, next) => {

}
exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    res.redirect('/');
}
