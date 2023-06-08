const User = require("../modals/User");

const Register = async (req, res) => {
  try {
    const userCreated = await User.create(req.body);
    res.status(200).json( userCreated );
  } catch (err) {
    res.status(500).json({
    erorr: err
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
