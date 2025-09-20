const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({
  shortcode: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  referrer: {
    type: String,
    default: "direct",
  },
  ip: {
    type: String,
  },
  location: {
    type: String, 
  },
});

module.exports = mongoose.model("Click", clickSchema);
