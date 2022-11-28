const sequelize = require("sequelize");

// const sequelizeInstance = new sequelize("DB name", "root", "Password", {})

const sequelizeInstance = new sequelize("Books", "root", "Ammiabba@143", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelizeInstance;
