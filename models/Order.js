const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  meatType: { type: [String] },
  salesType: { type: String },
  customerName: { type: String },
  waiterName: { type: String },
  kilogram: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
