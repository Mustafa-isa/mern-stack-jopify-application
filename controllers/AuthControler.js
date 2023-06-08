const user = require("../modals/User");

const Register = async (req, res) => {
  try {
    const userCreated = await user.create(req.body);
    res.status(2001).json({ userCreated });
  } catch (err) {
    res.status(500).json({
      msg: "error happened when create new user"
    });
  }
};
const Login = async (req, res) => {
  res.send("Login");
};
const Update = async (req, res) => {
  res.send("Update");
};
module.exports = { Register, Login, Update };
