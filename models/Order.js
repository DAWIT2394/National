const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  meatType: [String],
  salesType: String,
  customerName: String,
  waiterName: String,
  kilogram: Number,
  status: {
    type: String,
    default: 'pending'  // default status
  },
  finishedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
