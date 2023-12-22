const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("fishStore","admin","",{dialect: "mysql", host: "assesmentdb.cvquzkjart0o.us-east-1.rds.amazonaws.com", password: "jikku1234"});

module.exports = sequelize;