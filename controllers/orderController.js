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
