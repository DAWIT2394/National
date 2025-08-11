const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    let { meatType, salesType, customerName, waiterName, kilogram } = req.body;

    // Ensure meatType is always an array
    if (!Array.isArray(meatType)) {
      meatType = [meatType];
    }

    const newOrder = new Order({
      meatType,
      salesType,
      customerName,
      waiterName,
      kilogram,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



exports.getOrders = async (_req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};
// DELETE order
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Order.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
// controllers/orderController.js

exports.deleteAllOrders = async (req, res) => {
  try {
    const result = await Order.deleteMany({});
    res.json({ message: 'All orders deleted successfully', deletedCount: result.deletedCount });
  } catch (err) {
    console.error('Error deleting all orders:', err);  // <-- Add this line to log error
    res.status(500).json({ message: 'Server error while deleting all orders' });
  }
};
// UPDATE order
exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Order.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


