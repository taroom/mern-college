const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    npm: {
      type: Number,
    },
    nama: {
      type: String,
    },
    jurusan: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Students", studentSchema);
