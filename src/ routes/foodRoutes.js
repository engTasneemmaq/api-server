"use strict";
const express = require("express");

const { FoodTable} = require("../models/index");

const FoodRouter = express.Router();

FoodRouter.get("/food", getFood);
FoodRouter.get("/food/:id", getOneFood);
FoodRouter.post("/food", createFood);
// /food/1 to  send request by id
FoodRouter.put("/food/:id", updateFood);   
FoodRouter.delete("/food/:id", deleteFood);


async function getFood(req, res) {
    const food = await FoodTable.read();
    res.status(200).json(food);
}

async function getOneFood(req, res) {
    const food_id = parseInt(req.params.id);
    let food = await FoodTable.read(food_id);
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newFood = req.body;
    let food = await FoodTable.create(newFood);
    res.status(201).json(food);
}

async function updateFood(req, res) {
    let food_id = parseInt(req.params.id);
    let updateFood = req.body;
    let foundFood = await FoodTable.read(food_id);
    if (foundFood) {

        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    } else {
        res.status(404);
    }
}

async function deleteFood(req, res) {
    let food_id = parseInt(req.params.id);
    let deleteFood = await FoodTable.delete(food_id);
    res.status(204).json('record deleted'); 
}

module.exports = FoodRouter;

