const sequelize = require("../db");
const {DataTypes} = require("sequelize");


const ReviewsCoupon = sequelize.define("reviews_coupons", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id'
        },
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        },
        coupon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'role_id'
        }
    },
    {
        timestamps: false
    });

module.exports = ReviewsCoupon;