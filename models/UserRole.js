const sequelize = require("../db");
const {DataTypes} = require("sequelize");


const UserRole = sequelize.define("users_roles", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: 'user_id'
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: 'role_id'
    }
},
    {
        timestamps: false
    });

module.exports = UserRole;