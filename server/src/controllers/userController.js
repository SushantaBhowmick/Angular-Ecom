const userService = require("../services/userService");

exports.getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "token not found",
      });
    }
const user = await userService.getUserProfileByToken(token);
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      msg: "Internal server error",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({
      success: true,
      msg:"Get all users!",
      users,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
      msg: "Internal server error",
    });
  }
};
