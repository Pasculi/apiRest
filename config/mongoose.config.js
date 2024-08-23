const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  const { DB_URI } = process.env;
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log(`***************************************************`);
      console.log("Conectado a la base de datos de MongoDB");
      console.log(`***************************************************`);
    })
    .catch((err) => {
      
    console.error("Error al conectar a la base de datos de MongoDB to MongoDB:", err);
  })
};

module.exports = dbConnect;
