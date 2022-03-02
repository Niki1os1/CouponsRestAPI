const sequelize = require("../db");
const {DataTypes} = require("sequelize");


const Role = sequelize.define("roles", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'name'
    }
});

module.exports = Role;