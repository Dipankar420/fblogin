// init code
const mongoose = require("mongoose");

// user schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

// user model
mongoose.model("users", userSchema);

// module exports
module.exports = mongoose.model("users");
