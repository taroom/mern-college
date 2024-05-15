const studentModel = require("../models/studentModel");
const { responseDefault } = require("../utils/responMessage");
const { createValidation } = require("../validation/studentValidation");

// tambah data
const addData = async (req, res) => {
  try {
    // lakukan validation

    //check unique
    const dataExist = await studentModel.findOne({ npm: req.body.npm });
    if (dataExist) {
      return res.status(400).json({ message: responseDefault.DATA_EXIST });
    }

    // const validation = await createValidation(req.body);
    // if (validation) {
    //   return res.status(400).json(validation);
    // }
    const { error } = await createValidation(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

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

//lihat data by ID
const getDataById = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      return res.status(404).json({
        message: responseDefault.ID_NOT_FOUND_OVER,
      });
    } else {
      const foundIdFirst = await studentModel.findOne({ _id: req.params.id });
      if (!foundIdFirst) {
        return res.status(404).json({
          message: responseDefault.ID_NOT_FOUND,
        });
      }
    }
    const response = await studentModel.findById(req.params.id);
    res.status(200).json({
      message: "Data ketemu",
      data: response,
    });
  } catch (error) {
    console.error(error);
  }
};

//get data by ID and update
const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await studentModel.findByIdAndUpdate(
      {
        _id: id,
      },
      { $set: body }
    );

    res.status(200).json({
      message: responseDefault.UPDATED_DATA,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addData,
  getData,
  getDataById,
  updateData,
};
