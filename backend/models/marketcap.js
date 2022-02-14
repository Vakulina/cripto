const mongoose = require('mongoose');

const marketCapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model('marketcap', marketCapSchema);
