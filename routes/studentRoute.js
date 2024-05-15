const express = require("express");
const route = express.Router();
const { addData, getData } = require("../controllers/studentController");

route.get("/get-data", getData);
route.post("/add-data", addData);

module.exports = route;
