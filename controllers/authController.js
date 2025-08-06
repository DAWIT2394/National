const User = require('../models/User');

// Create Admin (TEMPORARY – secure/remove after use)
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Admin already exists' });

    const admin = new User({ name, email, password, role: 'admin' });
    await admin.save();

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Sign Up (by admin for butcher or cooker)
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!['butcher', 'cooker'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role specified' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password, role });
    await user.save();

    res.status(201).json({ message: `${role} created successfully` });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Optional: add JWT here
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', err });
  }
};
