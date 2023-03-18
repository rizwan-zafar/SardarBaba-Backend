const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Show', 'Hide'],
    default: 'Show',
  },
});

const Brand = mongoose.model('Brand', categorySchema);

module.exports = Brand;
