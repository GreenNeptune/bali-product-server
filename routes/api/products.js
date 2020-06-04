const express = require('express');
const router = express.Router();
const DB = require('../api/DB')



router.get('/',
  (req, res) => {
    res.status(200).json(DB.products);
    try {
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error')
    }
  }
);

module.exports = router;