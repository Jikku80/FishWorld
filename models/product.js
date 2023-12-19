const Sequelize = require("sequelize");

const sequelize = require("../util/sqldb");

const Product = sequelize.define("product",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    fishName: Sequelize.STRING,
    fishType: Sequelize.STRING,
    fishPrice:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    fishDetail: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    fishImage: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;