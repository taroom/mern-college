const studentModel = require("../models/studentModel");
const { responseDefault } = require("../utils/responMessage");

// tambah data
const addData = async (req, res) => {
  try {
    const response = await studentModel.create(req.body);
    res.status(201).json({
      message: responseDefault.CREATED_DATA,
      data: response,
    });
  } catch (error) {
    console.error(error);
  }
};

// lihat data
const getData = async (req, res) => {
  try {
    const response = await studentModel.find();
    res.status(200).json({
      message: "mendapatkan data",
      data: response,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addData,
  getData,
};
