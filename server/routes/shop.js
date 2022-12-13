const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop.js');

const router = express.Router();
router.get('/', shopController.getProducts);
router.get('/add-product', shopController.getAddProduct);
router.post('/add-product', shopController.postAddProduct);

module.exports = router;