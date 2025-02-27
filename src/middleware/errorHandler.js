const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle Sequelize errors
  if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      errors: err.errors.map(e => e.message)
    });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      status: 'error',
      message: 'Validation error',
      errors: ['Email already exists']
    });
  }

  // Default error
  res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
};

module.exports = errorHandler; 