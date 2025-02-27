const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    hooks: {
      beforeSave: async (user) => {
        if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, 8);
        }
      }
    }
  }
);

// Instance method to generate auth token
User.prototype.generateAuthToken = function() {
  return jwt.sign({ id: this.id }, config.security.jwtSecret, {
    expiresIn: config.security.jwtExpiresIn
  });
};

// Hide password in JSON responses
User.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

module.exports = User;
