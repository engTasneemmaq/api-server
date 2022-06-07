"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("Clothes", {
        Clothes_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Clothes_Price: {
            type: DataTypes.INTEGER 
        },
    });

module.exports = Clothes;