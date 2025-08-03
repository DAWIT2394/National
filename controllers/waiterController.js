const Waiter = require('../models/Waiter');

exports.createWaiter = async (req, res) => {
  try {
    const waiter = new Waiter({ name: req.body.name });
    await waiter.save();
    res.status(201).json(waiter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getWaiters = async (_req, res) => {
  const waiters = await Waiter.find();
  res.json(waiters);
};
