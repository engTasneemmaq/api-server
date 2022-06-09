"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("ClothesT", {
        Clothes_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Clothes_Price: {
            type: DataTypes.STRING 
        },
        
        
    });
   
module.exports = Clothes;

