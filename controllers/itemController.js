const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getItems = async (_req, res) => {
  const items = await Item.find();
  res.json(items);
};
