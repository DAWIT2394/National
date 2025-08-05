const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { restrictTo } = require('../middlewares/roleMiddleware');

// Only admin can create user
router.post('/register', verifyToken, restrictTo('admin'), registerUser);
router.post('/login', loginUser);

module.exports = router;
