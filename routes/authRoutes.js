const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/create-admin', authController.createAdmin);     // Only run once
router.post('/signup', authController.registerUser);          // Admin creates Butcher/Cooker
router.post('/login', authController.login);                  // All roles login

module.exports = router;
