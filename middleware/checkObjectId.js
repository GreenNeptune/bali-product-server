const mongoose = require('mongoose');

const checkObjectId = (id) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[id])) {
    return res.status(400).json({ msg: 'Invalid Id' });
  }
  return next();
}

module.exports = checkObjectId;