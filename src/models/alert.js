const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ip: String,
  userAgent: String,
  method: String,
  url: String,
  rule: String,
  payload: String,
});

module.exports = mongoose.model('Alert', alertSchema);
