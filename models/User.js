const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'email'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'phone'
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'city'
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        field: 'role'
    }

});

module.exports = User;
