const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const database = require("./config/database");
database();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//daftarkan route
const studentRoute = require("./routes/studentRoute");
app.use("/mahasiswa", studentRoute);

app.listen(PORT, () => {
  console.info(`Berjalan di port http://localhost:${PORT}`);
});
