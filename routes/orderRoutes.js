const express = require('express');
const router = express.Router();
const { createOrder, getOrders, deleteOrder, updateOrder, deleteAllOrders } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getOrders);

// Fix order of routes here
router.delete('/all', deleteAllOrders);   // put this BEFORE the :id route
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrder);

module.exports = router;
