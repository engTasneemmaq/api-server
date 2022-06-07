"use strict";

const Food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        MealName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Ingredients: {
            type: DataTypes.STRING,
        },
    });

module.exports = Food;