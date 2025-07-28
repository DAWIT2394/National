const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  waiter: { type: String, required: true },
  items: [{
    name: String,
    quantity: Number,
    price: Number,
    total: Number
  }],
  totalAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
