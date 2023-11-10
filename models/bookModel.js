const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Evaluation: {
    type: Number,
    required: false,
  },
  Last_update: {
    type: String,
    required: true,
  },
  Have: {
    type: Boolean,
    required: true,
  },
  Summary: {
    type: String,
    required: false,
  },
  Image: {
    type: String,
    required: false,
  },
  Opinion: {
    type: String,
    required: false,
  },
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
