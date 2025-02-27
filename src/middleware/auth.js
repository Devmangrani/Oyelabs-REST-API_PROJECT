const jwt = require('jsonwebtoken');
const config = require('../config/config');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Authentication required'
      });
    }

    const decoded = jwt.verify(token, config.security.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      status: 'error',
      message: 'Invalid token'
    });
  }
};

module.exports = auth; 