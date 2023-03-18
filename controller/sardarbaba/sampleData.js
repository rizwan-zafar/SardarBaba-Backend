const SEARCH=require('./api/search.json') 
const RELATED_PRODUCTS=require('./api/related_products.json') 
const FLASH_SELL_PRODUCTS=require('./api/products_flash_sell.json') 
const BEST_SELLER_PRODUCTS=require('./api/products_flash_sell.json') 
const BEST_SELLER_GROCERY_PRODUCTS=require('./api/products_best_seller_grocery.json') 
const POPULAR_PRODUCTS=require('./api/products_popular.json') 
const COOKIES_PRODUCTS=require('./api/products_cookies.json') 
const CHIPS_PRODUCTS=require('./api/products_chips.json') 
const POPCORN_JERKY_PRODUCTS=require('./api/products_popcorn_jerky.json') 
const FRESH_VEGETABLES_PRODUCTS=require('./api/products_fresh_vegetables.json') 
const ORDER=require('./api/order.json') 
const ORDERS=require('./api/orders.json') 
const ORDER_STATUS=require('./api/order-status.json') 
const ADDRESS=require('./api/address.json') 
const PAYMENT=require('./api/payment.json') 
const CONTACT=require('./api/contact.json') 
const SHOP=require('./api/shop.json') 
const SHOPS=require('./api/shops.json') 
const WISHLIST=require('./api/wishlist.json') 


const Search = async (req, res) => {
  try {
    res.status(200).send({
        SEARCH
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const relatedPRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        RELATED_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const flesh_SELL_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        FLASH_SELL_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
 
const best_SELLER_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        BEST_SELLER_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const best_SELLER_GROCERY_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        BEST_SELLER_GROCERY_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const popular_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        POPULAR_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const cookies_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        COOKIES_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const chips_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        CHIPS_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const popcorn_JERKY_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        POPCORN_JERKY_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const fresh_VEGETABLES_PRODUCTS = async (req, res) => {
  try {
    res.status(200).send({
        FRESH_VEGETABLES_PRODUCTS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const order = async (req, res) => {
  try {
    res.status(200).send({
        ORDER
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};


const orders = async (req, res) => {
  try {
    res.status(200).send({
        ORDERS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const order_STATUS = async (req, res) => {
  try {
    res.status(200).send({
        ORDER_STATUS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const address = async (req, res) => {
  try {
    res.status(200).send({
        ADDRESS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const payment = async (req, res) => {
  try {
    res.status(200).send({
        PAYMENT
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const contact = async (req, res) => {
  try {
    res.status(200).send({
        CONTACT
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const shop = async (req, res) => {
  try {
    res.status(200).send({
        SHOP
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
 
const shops = async (req, res) => {
  try {
    res.status(200).send({
        SHOPS
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const wish_LIST = async (req, res) => {
  try {
    res.status(200).send({
        WISHLIST
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
 

module.exports = {
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
}
 
