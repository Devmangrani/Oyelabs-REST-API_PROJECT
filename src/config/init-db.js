const sequelize = require("./database");
const User = require("../models/user");

const initDatabase = async () => {
  try {
    console.log('Attempting database connection...');
    await sequelize.sync({ force: false });
    console.log('Database connection successful');
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
    process.exit(1);
  }
};

module.exports = initDatabase;
