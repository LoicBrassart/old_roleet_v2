const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  baseline: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true
  },
  fluffs: {
    type: [
      {
        title: {
          type: String,
          required: true
        },
        content: {
          type: String,
          required: true
        }
      }
    ],
    default: []
  },
  characterSheets: {
    type: [
      {
        _id: {
          type: mongoose.ObjectId,
          ref: "Sheet",
          required: true
        },
        gameSystemDisplay: {
          type: String,
          required: true,
          enum: [
            "Dungeons & Dragons | 3.5",
            "New World of Darkness | Werewolves: the Forsaken"
          ]
        },
        gameSystem: {
          type: String,
          required: true,
          enum: ["dnd_3-5", "nWoD_werewolves"]
        }
      }
    ]
  }
});
const Character = mongoose.model("character", CharacterSchema);

module.exports = {
  Character
};