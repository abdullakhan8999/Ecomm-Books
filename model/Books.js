const sequelize = require("sequelize");
const db_Connection = require("./../config/db.config");

module.exports = db_Connection.define(
  "books",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: sequelize.DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: sequelize.DataTypes.STRING,
    },
    author: {
      allowNull: false,
      type: sequelize.DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: sequelize.DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: sequelize.DataTypes.BIGINT,
    },
  },
  {
    timestamps: false,
  }
);
