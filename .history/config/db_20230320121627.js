require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://rizwanzafar4323:zafar4323@ac-j2gridb-shard-00-00.9wsxerr.mongodb.net:27017,ac-j2gridb-shard-00-01.9wsxerr.mongodb.net:27017,ac-j2gridb-shard-00-02.9wsxerr.mongodb.net:27017/?ssl=true&replicaSet=atlas-5fvvuv-shard-0&authSource=admin&retryWrites=true&w=majority", {
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
