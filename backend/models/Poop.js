const mongoose = require("mongoose");

const PoopSchema = mongoose.Schema({
  kakkaaja: {
    type: String,
    required: true,
  },
  tunti: {
    type: String,
    required: true,
  },
  kesto: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("poop", PoopSchema);
