const express = require('express');
const router = express.Router();
const { createWaiter, getWaiters } = require('../controllers/waiterController');

router.post('/', createWaiter);
router.get('/', getWaiters);

module.exports = router;
