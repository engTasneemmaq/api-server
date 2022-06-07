"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        Clothes_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Clothes_Price: {
            type: DataTypes.INTEGER 
        },
        // food_id:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // }
       
    });

module.exports = Clothes;