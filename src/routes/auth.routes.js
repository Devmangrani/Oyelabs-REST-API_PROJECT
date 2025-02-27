const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/auth/login', async (req, res, next) => {
  try {
    console.log('Login attempt:', req.body); // Debug log
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    console.log('Found user:', user ? 'yes' : 'no'); // Debug log

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials'
      });
    }

    const token = user.generateAuthToken();
    res.json({
      status: 'success',
      data: {
        user,
        token
      }
    });
  } catch (error) {
    console.error('Login error:', error); // Debug log
    next(error);
  }
});

module.exports = router; 