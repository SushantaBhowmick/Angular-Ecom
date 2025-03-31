const jwt = require("jsonwebtoken");
const jwtProvider = require("../utils/jwtProvider");
const userService = require("../services/userService");
const cartService = require("../services/cartService");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);

    return res.status(200).json({
      success: true,
      msg: "Register successfully!",
      jwt,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      msg: "Internal server error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(402).json({
        success: false,
        msg: "Invalid Password",
      });
    }

    const jwt = jwtProvider.generateToken(user._id);

    return res.status(200).json({
      success: true,
      msg: "Login successfully!",
      jwt,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      msg: "Internal server error",
    });
  }
};
