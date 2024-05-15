const express = require("express");
const route = express.Router();
const {
  addData,
  getData,
  getDataById,
  updateData,
  deleteData,
} = require("../controllers/studentController");

route.get("/get-data", getData);
route.get("/get-data/:id", getDataById);
route.put("/get-data/:id", updateData);
route.delete("/get-data/:id", deleteData);
route.post("/add-data", addData);

module.exports = route;
