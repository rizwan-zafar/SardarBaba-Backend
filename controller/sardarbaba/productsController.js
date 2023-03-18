const Product = require('../../models/Product');

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).send({
      message: 'Product Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    await Product.insertMany(req.body);
    res.status(200).send({
      message: 'Product Added successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingProducts = async (req, res) => {
  try {
    const products = await Product.find({ status: 'Show' }).sort({ _id: -1 });
    res.send(products);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getDiscountedProducts = async (req, res) => {
  try {
    const products = await Product.find({ discount: { $gt: 5 } }).sort({
      _id: -1,
    });
    res.send(products);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllProducts = async (req, res) => {
   
  const { title, category, price, page, limit } = req.query;

  const queryObject = {};

  let sortPrice;

  if (title) {
    queryObject.$or = [{ title: { $regex: `${title}`, $options: 'i' } }];
  }

  if (price === 'Low') {
    sortPrice = 1;
  } else {
    sortPrice = -1;
  }

  if (category) {
    // queryObject.category = { $regex: category, $options: 'i' };
    queryObject.parent = { $regex: category, $options: 'i' };
  }

  const pages = Number(page);
  const limits = Number(limit);
  const skip = (pages - 1) * limits;

  try {
   
    const allProducts = await Product.find(queryObject)
   
      .sort(price ? { price: sortPrice } : { _id: -1 })
      .skip(skip)
      .limit(limits);
      var products = []
  
      for (let i = 0; i < allProducts.length; i++) {

        let tags=[]
         for (let j = 0; j < allProducts[i].tag.length; j++)
        {
            let value=allProducts[i].tag[j].replace(/"|'/g, '').replace(/[\[\]']+/g,'')
            tags[j]={
                id:i,
                name:value,
                slug: value
            }
             
        }

        products[i]={
            id:allProducts[i]._id,
            name:allProducts[i].title,
            slug:allProducts[i].slug,
            description:allProducts[i].description,
            quantity:allProducts[i].quantity,
            price:allProducts[i].originalPrice,
            sale_price:allProducts[i].price,
            unit:allProducts[i].unit,
            image:allProducts[i].image,
            parent:allProducts[i].parent,
            category:allProducts[i].children.replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/[^A-Z0-9]/gi, "-")
            .replace(/[^A-Z0-9]/gi, " ")
            .replace(/ {1,2}/gi, "-")
            .toLowerCase(),
            brand:allProducts[i].type.replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/[^A-Z0-9]/gi, "-")
            .replace(/[^A-Z0-9]/gi, " ")
            .replace(/ {1,2}/gi, "-")
            .toLowerCase(),
            tag:tags
        }
      }

    res.send(products);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getStockOutProducts = async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $lt: 1 } }).sort({
      _id: -1,
    });

    res.send(products);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.send(product);
  } catch (err) {
    res.status(500).send({
      message: `Slug problem, ${err.message}`,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.sku = req.body.sku;
      product.title = req.body.title;
      product.slug = req.body.slug;
      product.description = req.body.description;
      product.parent = req.body.parent;
      product.children = req.body.children;
      product.type = req.body.type;
      product.unit = req.body.unit;
      product.quantity = req.body.quantity;
      product.originalPrice = req.body.originalPrice;
      product.price = req.body.price;
      product.discount = req.body.discount;
      product.image = req.body.image;
      product.tag = req.body.tag;
      await product.save();
      res.send({ data: product, message: 'Product updated successfully!' });
    }
    // handleProductStock(product);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;
  Product.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: `Product ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Product Deleted Successfully!',
      });
    }
  });
};

module.exports = {
  addProduct,
  addAllProducts,
  getAllProducts,
  getShowingProducts,
  getDiscountedProducts,
  getStockOutProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  updateStatus,
  deleteProduct,
};
