const express = require('express');
const router = express.Router();
const waiterController = require('../controllers/waiterController');

// Get all waiters
router.get('/', waiterController.getWaiters);

// Create a new waiter
router.post('/', waiterController.createWaiter);

// Update a waiter by ID
router.put('/:id', waiterController.updateWaiter);

// Delete a waiter by ID
router.delete('/:id', waiterController.deleteWaiter);

module.exports = router;
