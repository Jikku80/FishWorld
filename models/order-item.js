const Sequelize = require("sequelize");
const sequelize = require("../util/sqldb");

const OrderItem =  sequelize.define("orderItem",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantity: Sequelize.INTEGER
});

module.exports = OrderItem;