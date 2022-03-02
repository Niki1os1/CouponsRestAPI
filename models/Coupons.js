const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Coupons = sequelize.define("coupons", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'discount'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'amount'
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'start_date'
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'end_date'
    }
});

module.exports = Coupons;