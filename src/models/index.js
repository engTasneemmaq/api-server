"use strict";
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const {
    Sequelize,
    DataTypes
} = require("sequelize");

const Food = require("./food");
const Clothes = require("./clothes");
const Collection = require('./collection-class')


let sequelizeOptions =
    process.env.NODE_ENV === "production" ?
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            },
            native: true
        }
    } : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);



const foodTable = Food(sequelize, DataTypes);
const ClothesTable = Clothes(sequelize, DataTypes);

const foodCollection = new Collection(foodTable);
const clothesCollection = new Collection(ClothesTable);


// foodTable.hasMany(clothesTable, {
//     foreignKey: "foodId",
//     sourceKey: "id"
// });

// clothesTable.belongsTo(foodTable, {
//     foreignKey: "foodId",
//     targetKey: "id",
// });
module.exports = {
    db: sequelize,
    Food: Food(sequelize, DataTypes),
    Clothes: Clothes(sequelize, DataTypes),
    FoodTable: foodCollection,
    ClothesTable:clothesCollection, 
};