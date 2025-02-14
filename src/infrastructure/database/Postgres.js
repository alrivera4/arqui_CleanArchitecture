const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

module.exports = { sequelize, connectDatabase };
