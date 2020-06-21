const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('product', ProductSchema);