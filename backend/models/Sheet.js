const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SheetSchema = new Schema({
  author: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true
  },
  gameSystem: {
    type: String,
    required: true
  },
  gameSystemImg: {
    type: String,
    required: true
  },
  fields: mongoose.Schema.Types.Mixed,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
const Sheet = mongoose.model("sheet", SheetSchema);

module.exports = {
  Sheet
};
