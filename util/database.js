const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("fish_data","root","",{dialect: "mysql", host: "localhost", password: "password"});

module.exports = sequelize;