const User = require("../modals/User");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  try {
    const userCreated = await User.create(req.body);
    const Token = await userCreated.createJwt();
    userCreated.save()
    res.status(200).json({ userCreated, Token });
  } catch (err) {
    res.status(500).json({
      erorr: err
    });
  }
};
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+");
    const RightPassword = await bcrypt.compare(password, user.password);
    if (!user ||RightPassword ) {
      res.json({
        msg: "Incorrect email or password"
      });
    } else {
      res.json({
        msg: "Login successful"
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "An error occurred"
    });
  }
};
const Update = async (req, res) => {
  res.send("Update");
};
module.exports = { Register, Login, Update };
