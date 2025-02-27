const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const errors = [];

  // Validate name
  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }

  // Validate email
  if (!email) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }

  // Validate password for new user creation
  if (req.method === 'POST' && (!password || password.length < 6)) {
    errors.push('Password must be at least 6 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

module.exports = validateUser; 