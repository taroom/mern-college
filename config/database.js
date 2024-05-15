const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database terhubung");
  } catch (error) {
    console.error(error);
  }
};
