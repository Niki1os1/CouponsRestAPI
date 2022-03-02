const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const Reviews = sequelize.define("reviews", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'comment'
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'rate'
    },
    date: {
        type: DataTypes.DATE,
        field: 'date'
    },
    coupon_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'coupon_id'
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'user_id'
    }
});


module.exports = Reviews;