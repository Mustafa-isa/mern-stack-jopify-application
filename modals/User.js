const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "is required"],
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validation: {
    //   vaildate: validator.isEmail,
    //   msg: "please provide valide email"
    // }
  },
  password: {
    type: String,
    required: [true, "is required"],
    minlength: 8,
    maxlength: 50
  },
  lastName: {
    type: String,
    default: "last name",
    minlength: 2,
    maxlength: 50
  },
  location: {
    type: String,
    default: "my city",
    minlength: 2,
    maxlength: 100
  }
});

module.exports = mongoose.model("User", userSchema);
