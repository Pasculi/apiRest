const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Storage", StorageSchema);