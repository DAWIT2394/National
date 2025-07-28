const Order = require('../models/Order');

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get dashboard metrics
exports.getMetrics = async (req, res) => {
  try {
    const orders = await Order.find();
    const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0);
    const totalOrders = orders.length;

    const itemsSold = {};
    orders.forEach(order => {
      order.items.forEach(item => {
        itemsSold[item.name] = (itemsSold[item.name] || 0) + item.quantity;
      });
    });

    const bestSellers = Object.entries(itemsSold)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    res.json({
      totalSales,
      totalOrders,
      bestSellers: bestSellers.map(([name, qty]) => ({ name, qty })),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
