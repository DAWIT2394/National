const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getMetrics
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/metrics', getMetrics);

module.exports = router;
