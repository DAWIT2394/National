const Waiter = require('../models/Waiter');

// Create a new waiter
exports.createWaiter = async (req, res) => {
  try {
    const waiter = new Waiter({ name: req.body.name });
    await waiter.save();
    res.status(201).json(waiter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all waiters
exports.getWaiters = async (_req, res) => {
  try {
    const waiters = await Waiter.find();
    res.json(waiters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a waiter by ID
exports.updateWaiter = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedWaiter = await Waiter.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );
    if (!updatedWaiter) {
      return res.status(404).json({ error: 'Waiter not found' });
    }
    res.json(updatedWaiter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a waiter by ID
exports.deleteWaiter = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWaiter = await Waiter.findByIdAndDelete(id);
    if (!deletedWaiter) {
      return res.status(404).json({ error: 'Waiter not found' });
    }
    res.json({ message: 'Waiter deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
