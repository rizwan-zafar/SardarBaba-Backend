const express = require('express');
const router = express.Router();
const {
    Search,
    relatedPRODUCTS,
    flesh_SELL_PRODUCTS,
    best_SELLER_PRODUCTS,
    best_SELLER_GROCERY_PRODUCTS,
    popular_PRODUCTS,
    cookies_PRODUCTS,
    chips_PRODUCTS,
    popcorn_JERKY_PRODUCTS,
    fresh_VEGETABLES_PRODUCTS,
    order,
    orders,
    order_STATUS,
    address,
    payment,
    contact,
    shop,
    shops,
    wish_LIST
} = require('../../controller/sardarbaba/sampleData');

 
router.get('/SEARCH.json', Search);
router.get('/RELATED_PRODUCTS', relatedPRODUCTS);
router.get('/FLASH_SELL_PRODUCTS', flesh_SELL_PRODUCTS);
router.get('/BEST_SELLER_PRODUCTS', best_SELLER_PRODUCTS);
router.get('/BEST_SELLER_GROCERY_PRODUCTS', best_SELLER_GROCERY_PRODUCTS);
router.get('/POPULAR_PRODUCTS', popular_PRODUCTS);
router.get('/COOKIES_PRODUCTS', cookies_PRODUCTS);
router.get('/CHIPS_PRODUCTS', chips_PRODUCTS);
router.get('/POPCORN_JERKY_PRODUCTS', popcorn_JERKY_PRODUCTS);
router.get('/FRESH_VEGETABLES_PRODUCTS', fresh_VEGETABLES_PRODUCTS);
router.get('/ORDERS', orders);
router.get('/ORDER', order);
router.get('/ORDER_STATUS', order_STATUS);
router.get('/ADDRESS', address);
router.get('/PAYMENT', payment);
router.get('/CONTACT', contact);
router.get('/SHOP', shop);
router.get('/WISHLIST', wish_LIST);
 
 

module.exports = router;
