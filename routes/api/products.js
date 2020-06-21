const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

/**
 * @route GET /api_v1/products
 * @Desc get all products sorted by date in descending order
 */

router.get('/',
  async (req, res) => {
    const products = await Product.find().sort({ date: 'descending' });
    res.json(products);
    try {
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error')
    }
  }
);


module.exports = router;