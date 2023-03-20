require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const helmet = require('helmet');

const connectDB = require('../config/db');
const productRoutes = require('../routes/productRoutes');
const userRoutes = require('../routes/userRoutes');
const adminRoutes = require('../routes/adminRoutes');
const orderRoutes = require('../routes/orderRoutes');
const userOrderRoutes = require('../routes/userOrderRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const brandRoutes = require('../routes/brandRoutes');
const couponRoutes = require('../routes/couponRoutes');
const { isAuth, isAdmin } = require('../config/auth');

//store routs
const sardarbabaProducts = require('../routes/sardarbaba/productsRoutes');
const sardarbabaBrand = require('../routes/sardarbaba/brandRoutes');
const sardarbabaCatagories = require('../routes/sardarbaba/catagoriesRoutes');

// sample Data
const sampleData=require('../routes/sardarbaba/sampleDataRoute');
 
 connectDB()
 
const app = express();

// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
// app.enable('trust proxy');
app.set('trust proxy', 1);

app.use(express.json({ limit: '4mb' }));
app.use(helmet());
app.use(cors());

//root route
app.get('/', (req, res) => {
  res.send('App works properly!');
});

//this for route will need for store front, also for admin dashboard
app.use('/api/products/', productRoutes);
app.use('/api/category/', categoryRoutes);
app.use('/api/brand/', brandRoutes);
app.use('/api/coupon/', couponRoutes);
app.use('/api/user/', userRoutes);
app.use('/api/order/', userOrderRoutes);
// app.use('/api/order/', isAuth, userOrderRoutes);

//this for route will need for store front, also for admin dashboard
app.use('/api/sardarbaba-products/', sardarbabaProducts);
app.use('/api/sardarbaba-brand/', sardarbabaBrand);
app.use('/api/sardarbaba-categories/', sardarbabaCatagories);
app.use('/api/', sampleData);

 
 



//if you not use admin dashboard then these two route will not needed.
app.use('/api/admin/', adminRoutes);
app.use('/api/orders/', isAuth, orderRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message }); 
});


// Smoke Test Api
app.get("/sardarbaba", async (req, resp) => {
  resp.send("Smoke Test Successful for Sar")
})
const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
