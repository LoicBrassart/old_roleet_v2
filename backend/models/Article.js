const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  tags: {
    type: [String],
    default: []
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  published_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
const Article = mongoose.model("article", ArticleSchema);

module.exports = {
  Article
};
