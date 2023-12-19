const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("fishStore","root","",{dialect: "mysql", host: "localhost", password: "password"});

module.exports = sequelize;