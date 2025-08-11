require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');
const waiterRoutes = require('./routes/waiterRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express(); 
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB national connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/waiters', waiterRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', require('./routes/auth'));app.use('/api/auth', authRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
