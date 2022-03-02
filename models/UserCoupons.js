const sequelize = require("../db");
const {DataTypes} = require("sequelize");


const UserCoupons = sequelize.define("user_coupons", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'coupon_id'
    },
    date_used: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_used'
    },
    is_used: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_used'
    }
});

module.exports = UserCoupons;