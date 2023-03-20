require('dotenv').config({path:".env"});
const mongoose = require('mongoose');

console.log("check url",process.env.MONGO_URI)
const connectDB = async () => {
  try {
    await mongoose.connect( process.env.MONGO_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDB;
